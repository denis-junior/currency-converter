// @flow
import axios from "axios";
import { FC, useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PrivateHomepageContext } from "../contexts/PrivateHomepageContext";
import { api } from "../services/api";
import { CurrentConverterValue } from "../types/CurrencyConverterItem";

interface IFormState {
  type: string;
  current_value: number;
  to_now_value: string;
}
export const CurrentExchange: React.FC = () => {
  const navigate = useNavigate();

  const {setHistoric} = useContext(PrivateHomepageContext)

  const [formState, setFormState] = useState<IFormState>({
    type: "USDtoGBP",
    current_value: 0,
    to_now_value: "0",
  });

  // make function for make request
  const postInDBandRecoverData = (
    coinSymbols: string[],
    to_now_value: number,
    current_value: number
  ) => {
    api
      .post(
        "/history",
        {
          current: {
            type: coinSymbols[0],
            value: current_value,
          },
          to_now: {
            type: coinSymbols[1],
            value: to_now_value,
          },
        },
        {
          headers: {
            token: localStorage.getItem("@token") || "",
          },
        }
      )
      .then((result) => {
        // console.log(result)
        api
          .get("/history/one", {
            headers: {
              token: localStorage.getItem("@token") || "",
            },
          })
          .then((response) => {
            setHistoric(response.data.histories);
          });
      });
  };

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log();

      const { type, current_value, to_now_value } = formState;

      //separate string
      const coinSymbols = type.split("to");

      // make trade
      axios
        .get(
          `https://api.frankfurter.app/latest?amount=${current_value}&from=${coinSymbols[0]}&to=${coinSymbols[1]}`
        )
        .then((response) => {
          // show for user
          if (response.data.base == "GBP") {
            setFormState({
              ...formState,
              to_now_value: "U$" + response.data.rates.USD,
            });

            postInDBandRecoverData(
              coinSymbols,
              response.data.rates.USD,
              current_value
            );
          } else {
            setFormState({
              ...formState,
              to_now_value: "£ " + response.data.rates.GBP,
            });
            postInDBandRecoverData(
              coinSymbols,
              response.data.rates.GBP,
              current_value
            );
          }
        });
    },
    [formState]
  );

  return (
    <div className="px-3 bg-light rounded">
      <h4 className="text-center mt-3 py-3">Currency Exchange</h4>
      <div className="card text-dark bg-light mb-3 py-2">
        <div className="card-body">
          <h5 className="card-title text-center mb-3">
            Select the type of currency exchange
          </h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <select
                name="current_type"
                value={formState.type}
                required
                onChange={(event) => {
                  setFormState({
                    ...formState,
                    type: event.currentTarget?.value || "USDtoGBP",
                  });
                }}
                className="form-select mb-3 text-center"
              >
                <option value="GBPtoUSD">GBP to USD</option>
                <option selected value="USDtoGBP">
                  USD to GBP
                </option>
              </select>

              <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3">
                <div className="col">
                  <input
                    type="number"
                    name="current_value"
                    value={formState.current_value}
                    className="form-control text-center"
                    required
                    onChange={(event) => {
                      setFormState({
                        ...formState,
                        current_value: Number(event.currentTarget?.value) || 0,
                      });
                    }}
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="current_value"
                    value={formState.to_now_value}
                    className="form-control text-center"
                    disabled
                  />
                </div>
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-center">
              <button
                type="submit"
                className="align-items-center btn btn-outline-success"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
