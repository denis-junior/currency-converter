// @flow
import { FC } from "react";
import { CurrentConverterValue } from "../types/CurrencyConverterItem";
import moment from 'moment';

interface Props {
    historic: CurrentConverterValue[];
}

export const HistoricCard: FC<Props> = ({ historic }) => {
    
    return (
        <div className="px-3 bg-light rounded">
            <h4 className="text-center py-3">Your historic</h4>
            <div className="card text-dark bg-light mb-3">
                <div className="card-body">
                    <h5 className="card-title text-center mb-3">Last conversions</h5>
                    <div className="card">
                          <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>From</th>
                                    <th>Value</th>
                                    <th>To</th>
                                    <th>Value</th>
                                </tr>
                            </thead>
                            <tbody> oi
                            {historic.map((value, index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{moment(value.created_at).format("DD/MM/YYYY")}</td>
                                        <td>{value.current.type}</td>
                                        <td>{value.current.value}</td>
                                        <td>{value.to_now.type}</td>
                                        <td>{value.to_now.value}</td>
                                    </tr>
                                )
                            })}                                
                            </tbody>
                        </table>



                    </div>
                </div>
            </div>
        </div>
    );
};
