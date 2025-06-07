import { ReviewType, AvailableType } from "../../models/models";
import { reviewListHandlerMock } from "../../mocks/data/review/reviewList";
import { availableListHandlerMock } from "../../mocks/data/activity/availableList";

const reviewListHandler: ReviewType[] = reviewListHandlerMock;

const availableListHandler: AvailableType[] = availableListHandlerMock;

export { reviewListHandler, availableListHandler };
