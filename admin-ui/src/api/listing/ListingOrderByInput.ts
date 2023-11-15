import { SortOrder } from "../../util/SortOrder";

export type ListingOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  listings?: SortOrder;
  locationData?: SortOrder;
  locationType?: SortOrder;
  mapData?: SortOrder;
  photos?: SortOrder;
  placeAmenities?: SortOrder;
  placeSpace?: SortOrder;
  placeType?: SortOrder;
  updatedAt?: SortOrder;
};
