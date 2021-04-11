import React from 'react';
import { IStall } from './types';
import config from './config';

const greyedDollar = () => (
  <span
    style={{
      display: 'inline',
      color: '#979797',
      fontFamily: 'Roboto',
      fontSize: '14px',
    }}
  >
    $
  </span>
);

const normalDollar = () => (
  <span
    style={{
      display: 'inline',
      color: '#263238',
      fontFamily: 'Roboto',
      fontSize: '14px',
    }}
  >
    $
  </span>
);

export const GenerateExpenseLevel = (expenseLevel: number) => {
  let i = expenseLevel;
  let j = 3 - expenseLevel;
  const retVal = [];
  while (i > 0) {
    retVal.push(normalDollar());
    i -= 1;
  }
  while (j > 0) {
    retVal.push(greyedDollar());
    j -= 1;
  }
  return retVal;
};

export const isDesktop = () => window.innerWidth > 1280;


// @ts-ignore
export const getAddressObject = (address_components) => {
  const ShouldBeComponent = {
    home: ['street_number'],
    postal_code: ['postal_code'],
    street: ['street_address', 'route'],
    region: [
      'administrative_area_level_1',
      'administrative_area_level_2',
      'administrative_area_level_3',
      'administrative_area_level_4',
      'administrative_area_level_5',
    ],
    city: [
      'locality',
      'sublocality',
      'sublocality_level_1',
      'sublocality_level_2',
      'sublocality_level_3',
      'sublocality_level_4',
    ],
    country: ['country'],
  };

  const address = {
    home: '',
    postal_code: '',
    street: '',
    region: '',
    city: '',
    country: '',
  };
  // @ts-ignore
  address_components.forEach((component) => {
    for (const shouldBe in ShouldBeComponent) {
      // @ts-ignore
      if (ShouldBeComponent[shouldBe].indexOf(component.types[0]) !== -1) {
        if (shouldBe === 'country') {
          address[shouldBe] = component.short_name;
        } else {
          // @ts-ignore
          address[shouldBe] = component.long_name;
        }
      }
    }
  });
  return address;
};

const findDetails = (
  service: google.maps.places.PlacesService,
  request: google.maps.places.PlaceDetailsRequest
) =>
  new Promise((resolve, reject) => {
    service.getDetails(
      request,
      (
        results: google.maps.places.PlaceResult,
        status: google.maps.places.PlacesServiceStatus
      ) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          resolve(results);
        } else {
          reject(new Error("Sorry We Couldn't Find your Business."));
        }
      }
    );
  });

export async function initDetailsMap(
  placeId: string
): Promise<google.maps.places.PlaceResult> {
  const SanFrancisco = new google.maps.LatLng(
    config.SAN_FRANCISCO_LAT,
    config.SAN_FRANCISCO_LONG
  );
  const map = new google.maps.Map(
    document.getElementById('map') as HTMLElement,
    {
      center: SanFrancisco,
    }
  );
  const request = {
    placeId,
    fields: [
      'name',
      'formatted_address',
      'place_id',
      'geometry',
      'address_component',
      'formatted_phone_number',
      'website',
      'international_phone_number',
    ],
  };

  const service = new google.maps.places.PlacesService(map);
  const resultPlace = await findDetails(service, request);
  // @ts-ignore
  return resultPlace;
}