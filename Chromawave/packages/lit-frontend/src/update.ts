import { APIRequest, JSONRequest } from "./rest";
import * as App from "./app";
import { Profile, Route } from "../ts-models";

const dispatch = App.createDispatch();
export default dispatch.update;

dispatch.addMessage("ProfileSelected", (msg: App.Message) => {
  const { userid } = msg as App.ProfileSelected;

  return new APIRequest()
    .get(`/profiles/${userid}`)
    .then((response: Response) => {
      if (response.status === 200) {
        return response.json();
      }
      return undefined;
    })
    .then((json: unknown) => {
      if (json) {
        console.log("Profile:", json);
        return json as Profile;
      }
    })
    .then((profile: Profile | undefined) =>
      profile ? App.updateProps({ profile }) : App.noUpdate
    );
});

dispatch.addMessage("ProfileSaved", (msg: App.Message) => {
  const { userid, profile } = msg as App.ProfileSaved;

  return new JSONRequest(profile)
    .put(`/profiles/${userid}`)
    .then((response: Response) => {
      if (response.status === 200) {
        return response.json();
      }
      return undefined;
    })
    .then((json: unknown) => {
      if (json) {
        console.log("Profile:", json);
        json as Profile;
      }
      return undefined;
    })
    .then((profile: Profile | undefined) =>
      profile ? App.updateProps({ profile }) : App.noUpdate
    );
});

dispatch.addMessage("RouteRequested", (msg: App.Message) => {
  const { points } = msg as App.RouteRequested;
  const coordinates = points
    .map((pt) => `${pt.lon},${pt.lat}`)
    .join(";");

  console.log("Requesting route for points:", coordinates);

  return new APIRequest()
    .get(`/directions?pts=${coordinates}`)
    .then((response: Response) => {
      if (response.status === 200) return response.json();
      else return undefined;
    })
    .then((json: unknown) => {
      if (json) return json as Route;
      else return undefined;
    })
    .then((route: Route | undefined) =>
      route ? App.updateProps({ route }) : App.noUpdate
    );
});