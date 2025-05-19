import { ReviewType, AvailableType } from "../../models/models";
import {
  reviewListHandlerMock,
  availableListHandlerMock,
} from "../../mocks/mockData";

const reviewListHandler: ReviewType[] = reviewListHandlerMock;

const availableListHandler: AvailableType[] = availableListHandlerMock;

export { reviewListHandler, availableListHandler };
