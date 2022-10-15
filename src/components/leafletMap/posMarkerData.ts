import MarkerTemplate from "@components/ui-maps/markerTemplate";
import MapPointImageListItem from "src/api/dataSource/api/Artifactum/CrmGuide/IServices/Models/MapPoints/MapPointImageListItem";
import Position from "./position";

export default class PosMarkerData extends MarkerTemplate {
  // info: MarkerInfo;
  id: number;
  draggable: boolean;
  positionPoint: Position;
  mapRouteId: number;
  pointNumber: number;
  name: string;
  icon: string = '/assets/img/map-point-route.svg';
  images?: Array<MapPointImageListItem>
  
  // employees: Array<MapEmployeeItemResponse>;
  constructor(data: PosMarkerData) {
    super();
    this.id = data.id;
    this.draggable = !!data.draggable;
    this.name = data.name,
    this.pointNumber = data.pointNumber,
    this.mapRouteId = data.mapRouteId,
    this.images = data.images
    this.positionPoint =
      data.positionPoint == null
        ? null
        : new Position(
            data.positionPoint.lat || 0,
            data.positionPoint.lng || 0
          );

  }

}
