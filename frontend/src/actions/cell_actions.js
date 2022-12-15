import axios from "axios";
import { URI, CONFIG } from "./utils.js";
export const STAGE_CELL = "STAGE_CELL";
export const RECEIVE_CELL = "RECEIVE_CELL";
export const RECEIVE_CELLS = "RECEIVE_CELLS";
export const REMOVE_CELL = "REMOVE_CELL";
export const RECEIVE_ERROR = "RECEIVE_ERROR";

const receiveStagedCell = (payload) => ({
  type: STAGE_CELL,
  payload,
});

const removeCell = (cell) => ({
  type: REMOVE_CELL,
  cell,
});

const receiveCell = (payload) => ({
  type: RECEIVE_CELL,
  payload,
});

const receiveCells = (payload) => ({
  type: RECEIVE_CELLS,
  payload,
});

const receiveError = (payload) => ({
  type: RECEIVE_ERROR,
  payload,
});

export const fetchCells = () => async (dispatch) => {
  try {
    const res = await axios.get(`${URI}/cells/`);
    dispatch(receiveCells(res.data));
  } catch (err) {
    dispatch(receiveError(err.response.data));
  }
};

export const stageCell = (cell) => async (dispatch) => {
  try {
    dispatch(receiveStagedCell(cell));
  } catch (err) {
    dispatch(console.log("This is broken, Everything is broken"));
  }
};

export const submitCell = (cell) => async (dispatch) => {
  try {
    const res = await axios.post(`${URI}/cells/`, cell, CONFIG);
    dispatch(receiveCell(res.data));
  } catch (err) {
    dispatch(receiveError(err.response.data));
  }
};

export const updateCell = (cell) => async (dispatch) => {
  try {
    const res = await axios.patch(`${URI}/cells/${cell.id}/`, cell, CONFIG);
    dispatch(receiveCell(res.data));
  } catch (err) {
    dispatch(receiveError(err.response.data));
  }
};

export const deleteCell = (id) => async (dispatch) => {
  if (!id) {
    dispatch(removeCell(id));
  } else {
    try {
      const res = await axios.delete(`${URI}/cells/${id}`, CONFIG);
      dispatch(removeCell(id));
    } catch (err) {
      dispatch(receiveError(err.response.data));
    }
  }
};
