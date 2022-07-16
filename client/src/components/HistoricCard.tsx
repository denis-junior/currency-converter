// @flow
import { FC, useContext } from "react";
import moment from 'moment';
import { PrivateHomepageContext } from "../contexts/PrivateHomepageContext";

export const HistoricCard: FC = () => {
    const {historic} = useContext(PrivateHomepageContext)
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
                            <tbody>
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
