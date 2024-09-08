import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    coursesList: [],
  },
  reducers: {
    addCourses: (state, action) => {
      state.coursesList.push(action.payload);
    },
  },
});

export const { addCourses } = dashboardSlice.actions;

export default dashboardSlice.reducer;
