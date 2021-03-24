import { History } from 'history';
import RootReducer from './rootReducer';

export type RootState = ReturnType<typeof RootReducer>;
export type HistoryType = ReturnType<typeof Object>;

export interface IAddress {
  home: string;
  postal_code: string;
  street: string;
  region: string;
  city: string;
  country: string;
}

export interface IUser {
  createdAt: string;
  email: string;
  name: string;
  phone: string;
  state: string;
  status: string;
  type: string;
  updatedAt: string;
  hash?: string;
  __v?: number;
  _id: string;
}

export interface IPOS {
  name: string;
  img: string;
  redirectUrl: string;
  appendStateInRedirectUrl?: boolean;
}

export interface IAuth {
  organizerId: string;
  type: string;
  userId: string;
  importType: string;
}

export interface ICategorySelectObject {
  value: string;
  label: string;
}

export interface IProfile {
  name: string;
  email: string;
  user_id: string;
  phone: string;
}
export type LocationType = ReturnType<typeof Object>;

export interface IBusiness {
  tiers: string[];
  _id: string;
  supportLink?: string;
  status?: string;
  profile: {
    _id?: string;
    businessHours?: Record<string, string>[];
    name: string;
    category?: string;
    website?: string;
    address: Record<string, string | number>;
    phone: string;
    description?: string;
  };
  userId?: string;
  createdAt?: string;
  updatedAt?: string;
  logoUrl?: string;
  photos: string[];
}

export interface IPrice {
  amount: number;
  currency: string;
  amountperyear?: number;
}

export interface ITier {
  _id: string;
  businessId: string;
  perkDetails: Record<string, string>;
  status: string;
  tierLevel: number;
  price: IPrice;
  startDate: string;
  endDate: string;
  subscribers?: number;
  businessName?: string;
}

export interface ITierResponse {
  tierDetails: ITier;
  businessName: string;
}

export interface LoyalProfileType {
  _id: string;
  phone: string;
  type: string;
  status: string;
  state: string;
  name: string;
  __v: number;
}

export interface ISubscriber {
  _id: string;
  userId: string;
  status: string;
  photoUrl?: string;
  stripeCustomerId?: string;
  loyalties?: Record<string, string>;
  redemptions?: Record<string, string>;
  createdAt: string;
}

export interface NearbyBusinessType {
  _id: string;
  profile: {
    category: string[];
    name: string;
    gpsLocation: {
      coordinates: number[];
    };
  };
  logoUrl: string;
}

export interface ISubscription {
  tier: string;
  stripeSubscriptionId: string;
  startDate: string;
  renewalDate: string;
  endDate?: string;
  _id: string;
}

export interface IMoney {
  amount: string;
  currency: string;
}

export interface ISupporters {
  subscribers: number;
  avatars: string[];
}
