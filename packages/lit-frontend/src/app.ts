import { consume, createContext, provide } from "@lit/context";
import { property, state } from "lit/decorators.js";
import * as MVU from "./mvu";
import { MsgType } from "./mvu";
import { AuthenticatedUser, APIUser } from "./rest";
import { Profile, Smiski } from "ts-models";

export interface Model {
  user: APIUser;
  profile?: Profile;
  smiski?: Smiski;
  smiskiList?: [];
  userCollections?: [];
  userWishlist?: [];
}

export const context = createContext<Model>("SmiskiWorldModel");

export const init: Model = {
  user: new APIUser()
};

export interface UserLoggedIn extends MsgType<"UserLoggedIn"> {
  user: AuthenticatedUser;
}

export interface ProfileSelected
  extends MsgType<"ProfileSelected"> {
  userid: string;
}

export interface ProfileSaved extends MsgType<"ProfileSaved"> {
  userid: string;
  profile: Profile;
}

export interface SmiskiCollectionUpdated extends MsgType<"SmiskiCollectionUpdated"> {
  userid: string;
  smiski_owned: string[];
}


export interface SmiskiWishlistUpdated extends MsgType<"SmiskiWishlistUpdated"> {
  userid: string;
  wishlist: string[];
}

export type Message =
  | ProfileSelected
  | ProfileSaved
  | UserLoggedIn
  | SmiskiCollectionUpdated
  | SmiskiWishlistUpdated

export class Main
  extends MVU.Main<Model, Message>
  implements MVU.App<Model, Message>
{
  @provide({ context })
  @state()
  model = init;

  constructor(update: MVU.Update<Model, Message>) {
    super(
      update,
      () => this.model,
      (next: Model) => (this.model = next)
    );
  }
}

export class View extends MVU.View<Message> {
  @consume({ context: context, subscribe: true })
  @property({ attribute: false })
  _model: Model | undefined;

  getFromModel<T>(key: keyof Model) {
    if (this._model) {
      return this._model[key] as T;
    }
  }
}

export const createDispatch = () =>
  new MVU.Dispatch<Model, Message>();

export const updateProps = MVU.updateProps<Model>;
export const noUpdate = MVU.noUpdate<Model>;