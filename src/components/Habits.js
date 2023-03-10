import React from "react";

import { useDispatch } from "react-redux";
// importing the deleteHabit and updateStatus reducers [function] from habitSlice
import { deleteHabit, updateStatus } from "../features/habitSlice";

function Habits({ habitName, habitDiscription, habitStatus, habitId }) {
	
	const dispatch = useDispatch();

	const updateCompleteStatus = (e) => {
		
		const data = {
			date: e.target.getAttribute("data-date"),
			id: habitId,
		};

		
		dispatch(updateStatus(data));
	};

	return (
		<div className="list-of-habits">
			<div className="habit-details">
				<div className="habit-name">{habitName}</div>
				<div className="habit-description">{habitDiscription}</div>
			</div>
			<div className="seven-days-of-week">
				<table>
					<thead>
						<tr>
							
							<th>{habitStatus[0].date}</th>
							<th>{habitStatus[1].date}</th>
							<th>{habitStatus[2].date}</th>
							<th>{habitStatus[3].date}</th>
							<th>{habitStatus[4].date}</th>
							<th>{habitStatus[5].date}</th>
							<th style={{ background: "purple" }}>{habitStatus[6].date}</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							
							<td onClick={updateCompleteStatus} data-date={habitStatus[0].date}>
								
								{habitStatus[0].status === "none" ? <i className="fa-solid fa-check"></i> : habitStatus[0].status === "done" ? <i className="fa-solid fa-circle-check done"></i> : <i className="fa-solid fa-circle-xmark fail"></i>}
							</td>
							<td onClick={updateCompleteStatus} data-date={habitStatus[1].date}>
								{habitStatus[1].status === "none" ? <i className="fa-solid fa-check"></i> : habitStatus[1].status === "done" ? <i className="fa-solid fa-circle-check done"></i> : <i className="fa-solid fa-circle-xmark fail"></i>}
							</td>
							<td onClick={updateCompleteStatus} data-date={habitStatus[2].date}>
								{habitStatus[2].status === "none" ? <i className="fa-solid fa-check"></i> : habitStatus[2].status === "done" ? <i className="fa-solid fa-circle-check done"></i> : <i className="fa-solid fa-circle-xmark fail"></i>}
							</td>
							<td onClick={updateCompleteStatus} data-date={habitStatus[3].date}>
								{habitStatus[3].status === "none" ? <i className="fa-solid fa-check"></i> : habitStatus[3].status === "done" ? <i className="fa-solid fa-circle-check done"></i> : <i className="fa-solid fa-circle-xmark fail"></i>}
							</td>
							<td onClick={updateCompleteStatus} data-date={habitStatus[4].date}>
								{habitStatus[4].status === "none" ? <i className="fa-solid fa-check"></i> : habitStatus[4].status === "done" ? <i className="fa-solid fa-circle-check done"></i> : <i className="fa-solid fa-circle-xmark fail"></i>}
							</td>
							<td onClick={updateCompleteStatus} data-date={habitStatus[5].date}>
								{habitStatus[5].status === "none" ? <i className="fa-solid fa-check"></i> : habitStatus[5].status === "done" ? <i className="fa-solid fa-circle-check done"></i> : <i className="fa-solid fa-circle-xmark fail"></i>}
							</td>
							<td onClick={updateCompleteStatus} data-date={habitStatus[6].date} style={{ background: "purple" }}>
								{habitStatus[6].status === "none" ? <i className="fa-solid fa-check"></i> : habitStatus[6].status === "done" ? <i className="fa-solid fa-circle-check done"></i> : <i className="fa-solid fa-circle-xmark fail"></i>}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
						
			<div onClick={() => dispatch(deleteHabit(habitId))} className="delete-btn">
				<i className="fa-solid fa-trash"></i>
			</div>
		</div>
	);
}

export default Habits;
