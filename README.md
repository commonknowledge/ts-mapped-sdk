# ts-mapped SDK

TypeScript SDK for consuming the [ts-mapped](https://github.com/commonknowledge/ts-mapped) REST API.

> **Note:** This package is automatically generated from the ts-mapped repository. Do not edit directly.

## Installation

```bash
npm install github:commonknowledge/ts-mapped-sdk
# or if published to npm:
npm install @commonknowledge/ts-mapped-sdk
```

## Usage

```typescript
import {
  type GeoJSONAPIResponse,
  type GeoJSONAPIFeature,
  type GeoJSONFeatureProperties,
  type APIRecordFilter,
  type APIRecordSort,
  APIFilterOperator,
  APIFilterType,
} from '@commonknowledge/ts-mapped-sdk';

// Fetch data with proper typing
async function fetchGeoJSON(dataSourceId: string): Promise<GeoJSONAPIResponse> {
  const response = await fetch(
    `https://your-instance.com/api/rest/data-sources/${dataSourceId}/geojson`,
    {
      headers: {
        'Authorization': `Basic ${btoa('email:password')}`,
      },
    }
  );
  return response.json();
}

// Use enums for filter operators
const filter: APIRecordFilter = {
  type: APIFilterType.TEXT,
  column: 'name',
  search: 'example',
  operator: APIFilterOperator.AND,
};
```

## Available Types

- `GeoJSONAPIResponse` - Main response type from the GeoJSON endpoint
- `GeoJSONAPIFeature` - Individual feature in the response
- `GeoJSONFeatureProperties` - Properties object for each feature
- `APIRecordFilter` - Filter configuration for querying
- `APIRecordSort` - Sort configuration
- `APIFilterOperator` - `AND` / `OR` operators (enum)
- `APIFilterType` - `GEO` / `MULTI` / `TEXT` filter types (enum)
- `APIPoint` - Geographic coordinates (lat/lng)
- `APIGeocodeResult` - Geocoding metadata
- `GeoJSONAPIErrorResponse` - Error response structure

## Documentation

For detailed usage examples, see the [API documentation](https://github.com/commonknowledge/ts-mapped/blob/main/src/api/README.md).

## License

MIT
