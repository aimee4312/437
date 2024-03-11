import { APIRequest, JSONRequest } from "./rest";
import { Profile } from "ts-models";
import * as App from "./app";

const dispatch = App.createDispatch();
export default dispatch.update;

dispatch.addMessage(
  "UserLoggedIn",
  (msg: App.Message, model: App.Model) => {
    const { user } = msg as App.UserLoggedIn;

    return App.updateProps({ user })(model);
  }
);

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

dispatch.addMessage("SmiskiAddedToCollection", (msg: App.Message) => {
  const { userid, smiski } = msg as App.SmiskiAddedToCollection;

  return new JSONRequest({ smiski })
    .put(`/profiles/${userid}`)
    .then((response: Response) => {
      if (response.status === 200) {
        return response.json();
      }
      return undefined;
    })
    .then((json: unknown) => {
      if (json) {
        console.log("Profile Updated:", json);
        return json as Profile;
      }
      return undefined;
    })
    .then((profile: Profile | undefined) =>
      profile ? App.updateProps({ profile }) : App.noUpdate
    );
});


dispatch.addMessage("SmiskiRemovedFromCollection", (msg: App.Message) => {
  const { userid, smiskiName } = msg as App.SmiskiRemovedFromCollection;

  return new JSONRequest({ smiskiName })
    .put(`/profiles/${userid}`)
    .then((response: Response) => {
      if (response.status === 200) {
        return response.json();
      }
      return undefined;
    })
    .then((json: unknown) => {
      if (json) {
        console.log("Profile Updated:", json);
        return json as Profile;
      }
      return undefined;
    })
    .then((profile: Profile | undefined) =>
      profile ? App.updateProps({ profile }) : App.noUpdate
    );
});

dispatch.addMessage("SmiskiAddedToWishlist", (msg: App.Message) => {
  const { userid, smiski } = msg as App.SmiskiAddedToWishlist;

  return new JSONRequest({ smiski })
    .put(`/profiles/${userid}`)
    .then((response: Response) => {
      if (response.status === 200) {
        return response.json();
      }
      return undefined;
    })
    .then((json: unknown) => {
      if (json) {
        console.log("Profile Updated:", json);
        return json as Profile;
      }
      return undefined;
    })
    .then((profile: Profile | undefined) =>
      profile ? App.updateProps({ profile }) : App.noUpdate
    );
});


dispatch.addMessage("SmiskiRemovedFromWishlist", (msg: App.Message) => {
  const { userid, smiskiName } = msg as App.SmiskiRemovedFromWishlist;

  return new JSONRequest({ smiskiName })
    .put(`/profiles/${userid}`)
    .then((response: Response) => {
      if (response.status === 200) {
        return response.json();
      }
      return undefined;
    })
    .then((json: unknown) => {
      if (json) {
        console.log("Profile Updated:", json);
        return json as Profile;
      }
      return undefined;
    })
    .then((profile: Profile | undefined) =>
      profile ? App.updateProps({ profile }) : App.noUpdate
    );
});

