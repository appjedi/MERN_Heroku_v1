import React, { useState } from "react";

import Helper from '../services/helper';
const Donations = ({ donations }) => {

    const donationsList = donations.map((row) =>
        <tr key={row.id}>
            <td>${row.amount}</td><td>{Helper.nicedate(row.id)}</td>
        </tr>
    );
    if (donations.length < 1) {
        return <div />
    }
    return (
        <div>
            <table border='1'><thead><tr><th>Amount</th><th>Date</th></tr></thead><tbody>{donationsList}</tbody></table>
        </div>
    )
}
export default Donations;