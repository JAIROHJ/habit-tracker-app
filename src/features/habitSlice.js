import { createSlice } from "@reduxjs/toolkit";

let habitsArr = localStorage.getItem("habits");
if (habitsArr === null) {
	habitsArr = [];
} else {
	habitsArr = JSON.parse(localStorage.getItem("habits"));
}


const initialState = {
	habits: habitsArr,
};



export const habitSlice = createSlice({
	name: "habit",
	initialState,
	
	reducers: {
		
		addHabit: (state, action) => {
			
			state.habits = [...state.habits, action.payload];
			const newHabitsArr = state.habits;
			
			localStorage.setItem("habits", JSON.stringify(newHabitsArr));
			// console.log(state.habits);
		},
		// this function is responsible for deleting a habit on clicking the delete button
		deleteHabit: (state, action) => {
			// console.log(action.payload);
			
			const idOfHabitToBeDeleted = Number(action.payload);
			const habitsArrayFromLocalStorage = JSON.parse(localStorage.getItem("habits"));
			let newArray = habitsArrayFromLocalStorage.filter((habit) => habit.id !== idOfHabitToBeDeleted);
			localStorage.setItem("habits", JSON.stringify(newArray));
			state.habits = newArray;
		},
		// this function is responsible for updating the status for a particular habit and day
		updateStatus: (state, action) => {
			
			const data = action.payload;
			const habitsArrayFromLocalStorage = JSON.parse(localStorage.getItem("habits"));
			let habitToBeUpdated = habitsArrayFromLocalStorage.filter((habit) => habit.id === data.id);
			let habitObjectToBeUpdated = habitToBeUpdated[0];
			// console.log(habitToBeUpdated[0].dates[0]);
			// console.log(typeof data.date);
		
			let newDateArray = habitObjectToBeUpdated.dates.map((date) => {
				if (date.date === data.date) {
					// console.log(date.status);
					if (date.status === "none") {
						date.status = "done";
					} else if (date.status === "done") {
						date.status = "fail";
					} else if (date.status === "fail") {
						date.status = "none";
					}
					// console.log(date);
				}
				// returning the new date array
				return date;
			});
			
			let newHabitsArrayToBeStoredInLocalStorage = habitsArrayFromLocalStorage.map((habit) => {
				if (data.id === habit.id) {
					habit.dates = newDateArray;
				}
				return habit;
			});
		
			localStorage.setItem("habits", JSON.stringify(newHabitsArrayToBeStoredInLocalStorage));
			state.habits = newHabitsArrayToBeStoredInLocalStorage;
		},
	},
});

console.log(habitSlice);


export const { addHabit, deleteHabit, updateStatus } = habitSlice.actions;

export default habitSlice.reducer;
