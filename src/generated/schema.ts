/**
 * AUTO-GENERATED from https://raw.githubusercontent.com/reearth/reearth-cms/main/server/schemas/integration/integration.yml.
 * Do not edit by hand. Run `bun run generate` to refresh.
 */
/* eslint-disable */
export interface paths {
  "/{workspaceIdOrAlias}/projects": {
    parameters: {
      query?: {
        /** @description Used to select the page */
        page?: components["parameters"]["pageParam"];
        /** @description Used to select the page */
        perPage?: components["parameters"]["perPageParam"];
        /** @description Used to define the order of the response list */
        sort?: components["parameters"]["sortParam"];
        /** @description Used to define the order direction of the response list, will be ignored if the order is not presented */
        dir?: components["parameters"]["sortDirParam"];
        /** @description keyword string */
        keyword?: components["parameters"]["keywordParam"];
      };
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
      };
      cookie?: never;
    };
    /**
     * Returns a list of projects.
     * @description Returns a list of projects
     */
    get: operations["ProjectFilter"];
    put?: never;
    /** Create a project */
    post: operations["ProjectCreate"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
      };
      cookie?: never;
    };
    /**
     * Returns a project.
     * @description Returns a project.
     */
    get: operations["ProjectGet"];
    put?: never;
    post?: never;
    /** Delete a project */
    delete: operations["ProjectDelete"];
    options?: never;
    head?: never;
    /**
     * Update a project.
     * @description Update a project.
     */
    patch: operations["ProjectUpdate"];
    trace?: never;
  };
  "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models": {
    parameters: {
      query?: {
        /** @description Used to select the page */
        page?: components["parameters"]["pageParam"];
        /** @description Used to select the page */
        perPage?: components["parameters"]["perPageParam"];
        /** @description Used to define the order of the response list */
        sort?: components["parameters"]["sortParam"];
        /** @description Used to define the order direction of the response list, will be ignored if the order is not presented */
        dir?: components["parameters"]["sortDirParam"];
        /** @description keyword string */
        keyword?: components["parameters"]["keywordParam"];
      };
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
      };
      cookie?: never;
    };
    /**
     * Returns a list of models.
     * @description Returns a list of models.
     */
    get: operations["ModelFilter"];
    put?: never;
    /** create a model */
    post: operations["ModelCreate"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID or key of the model in the project */
        modelIdOrKey: components["parameters"]["modelIdOrKeyParam"];
      };
      cookie?: never;
    };
    /**
     * Returns a model.
     * @description Returns a model.
     */
    get: operations["ModelGet"];
    put?: never;
    post?: never;
    /**
     * Delete a model.
     * @description Delete a model.
     */
    delete: operations["ModelDelete"];
    options?: never;
    head?: never;
    /**
     * Update a model.
     * @description Update a model.
     */
    patch: operations["ModelUpdate"];
    trace?: never;
  };
  "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/schema.json": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID or key of the model in the project */
        modelIdOrKey: components["parameters"]["modelIdOrKeyParam"];
      };
      cookie?: never;
    };
    /**
     * Returns a schema as json by project and model ID
     * @description Returns a schema as json by project and model ID
     */
    get: operations["SchemaByModelAsJSON"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/metadata_schema.json": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID or key of the model in the project */
        modelIdOrKey: components["parameters"]["modelIdOrKeyParam"];
      };
      cookie?: never;
    };
    /**
     * Returns a metadata schema as json by project and model ID
     * @description Returns a metadata schema as json by project and model ID
     */
    get: operations["MetadataSchemaByModelAsJSON"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/import": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID or key of the model in the project */
        modelIdOrKey: components["parameters"]["modelIdOrKeyParam"];
      };
      cookie?: never;
    };
    get?: never;
    /** Import data under the selected model */
    put: operations["ModelImport"];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/copy": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID or key of the model in the project */
        modelIdOrKey: components["parameters"]["modelIdOrKeyParam"];
      };
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** Copy schema and items of a selected model */
    post: operations["ModelCopy"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/groups": {
    parameters: {
      query?: {
        /** @description Used to select the page */
        page?: components["parameters"]["pageParam"];
        /** @description Used to select the page */
        perPage?: components["parameters"]["perPageParam"];
        /** @description Used to define the order of the response list */
        sort?: components["parameters"]["sortParam"];
        /** @description Used to define the order direction of the response list, will be ignored if the order is not presented */
        dir?: components["parameters"]["sortDirParam"];
      };
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
      };
      cookie?: never;
    };
    /**
     * Returns a list of groups in a project.
     * @description Returns a list of groups belonging to the specified project.
     */
    get: operations["GroupFilter"];
    put?: never;
    /** Create a new group in a project. */
    post: operations["GroupCreate"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/groups/{groupIdOrKey}": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID or key of the group in the project */
        groupIdOrKey: components["parameters"]["groupIdOrKeyParam"];
      };
      cookie?: never;
    };
    /**
     * Retrieve a group within a project.
     * @description Returns details of a specific group within the specified project.
     */
    get: operations["GroupGet"];
    put?: never;
    post?: never;
    /**
     * Delete a group within a project.
     * @description Deletes a group within a specified project.
     */
    delete: operations["GroupDelete"];
    options?: never;
    head?: never;
    /**
     * Update a group's details within a project.
     * @description Updates the name, key, or description of a group within a specific project.
     */
    patch: operations["GroupUpdate"];
    trace?: never;
  };
  "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/schemata/{schemaId}/fields": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID of the schema in the model */
        schemaId: components["parameters"]["schemaIdParam"];
      };
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** create a field */
    post: operations["FieldCreate"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/schemata/{schemaId}/fields/{fieldIdOrKey}": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID of the schema in the model */
        schemaId: components["parameters"]["schemaIdParam"];
        /** @description ID or key of the field in the models schema */
        fieldIdOrKey: components["parameters"]["fieldIdOrKeyParam"];
      };
      cookie?: never;
    };
    get?: never;
    put?: never;
    post?: never;
    /** delete a field */
    delete: operations["FieldDelete"];
    options?: never;
    head?: never;
    /** update a field */
    patch: operations["FieldUpdate"];
    trace?: never;
  };
  "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/items": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID or key of the model in the project */
        modelIdOrKey: components["parameters"]["modelIdOrKeyParam"];
      };
      cookie?: never;
    };
    /**
     * Returns a list of items.
     * @description Returns a list of items with filtering and ordering.
     */
    get: operations["ItemFilter"];
    put?: never;
    /**
     * create an item
     * @description Create an Item.
     */
    post: operations["ItemCreate"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/items/filter": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID or key of the model in the project */
        modelIdOrKey: components["parameters"]["modelIdOrKeyParam"];
      };
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Returns a list of items with complex filtering.
     * @description Returns a list of items with complex filtering in request body.
     */
    post: operations["ItemFilterPost"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/items.geojson": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID or key of the model in the project */
        modelIdOrKey: components["parameters"]["modelIdOrKeyParam"];
      };
      cookie?: never;
    };
    /**
     * Returns a GeoJSON that has a list of items as features.
     * @description Returns a GeoJSON that has a list of items as features.
     */
    get: operations["ItemsAsGeoJSON"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/items.csv": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID or key of the model in the project */
        modelIdOrKey: components["parameters"]["modelIdOrKeyParam"];
      };
      cookie?: never;
    };
    /**
     * Returns a CSV that has a list of items as features.
     * @description Returns a CSV that has a list of items as features.
     */
    get: operations["ItemsAsCSV"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/items/{itemId}": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID or key of the model in the project */
        modelIdOrKey: components["parameters"]["modelIdOrKeyParam"];
        /** @description ID of the selected item */
        itemId: components["parameters"]["itemIdParam"];
      };
      cookie?: never;
    };
    /**
     * Returns an item.
     * @description Returns an item.
     */
    get: operations["ItemGet"];
    put?: never;
    post?: never;
    /** delete an item */
    delete: operations["ItemDelete"];
    options?: never;
    head?: never;
    /**
     * Update an item.
     * @description Update an item.
     */
    patch: operations["ItemUpdate"];
    trace?: never;
  };
  "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/items/{itemId}/publish": {
    parameters: {
      query?: {
        /** @description Specifies whether asset data are embedded in the results */
        asset?: components["parameters"]["assetParam"];
      };
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID or key of the model in the project */
        modelIdOrKey: components["parameters"]["modelIdOrKeyParam"];
        /** @description ID of the selected item */
        itemId: components["parameters"]["itemIdParam"];
      };
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** publish item */
    post: operations["ItemPublish"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/items/{itemId}/comments": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID or key of the model in the project */
        modelIdOrKey: components["parameters"]["modelIdOrKeyParam"];
        /** @description ID of the selected item */
        itemId: components["parameters"]["itemIdParam"];
      };
      cookie?: never;
    };
    /** get an item comment */
    get: operations["ItemCommentList"];
    put?: never;
    /** create an item comment */
    post: operations["ItemCommentCreate"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/models/{modelIdOrKey}/items/{itemId}/comments/{commentId}": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID or key of the model in the project */
        modelIdOrKey: components["parameters"]["modelIdOrKeyParam"];
        /** @description ID of the selected item */
        itemId: components["parameters"]["itemIdParam"];
        /** @description ID of the selected comment */
        commentId: components["parameters"]["commentIdParam"];
      };
      cookie?: never;
    };
    get?: never;
    put?: never;
    post?: never;
    /** delete item comment */
    delete: operations["ItemCommentDelete"];
    options?: never;
    head?: never;
    /** Update Item Comment */
    patch: operations["ItemCommentUpdate"];
    trace?: never;
  };
  "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/assets": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
      };
      cookie?: never;
    };
    /**
     * Returns a list of assets.
     * @description Returns a list of assets with filtering and ordering.
     */
    get: operations["AssetFilter"];
    put?: never;
    /**
     * Create an new asset.
     * @description Create a new asset and return the created asset.
     */
    post: operations["AssetCreate"];
    /** delete assets in batch */
    delete: operations["AssetBatchDelete"];
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/assets/uploads": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
      };
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Upload an asset.
     * @description Issue an URL and a token to upload an asset.
     */
    post: operations["AssetUploadCreate"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/assets/{assetId}": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID of the selected asset */
        assetId: components["parameters"]["assetIdParam"];
      };
      cookie?: never;
    };
    /** get asset */
    get: operations["AssetGet"];
    put?: never;
    post?: never;
    /** delete asset */
    delete: operations["AssetDelete"];
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/assets/{assetId}/publish": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID of the selected asset */
        assetId: components["parameters"]["assetIdParam"];
      };
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** publish asset */
    post: operations["AssetPublish"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/assets/{assetId}/unpublish": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID of the selected asset */
        assetId: components["parameters"]["assetIdParam"];
      };
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** publish asset */
    post: operations["AssetUnpublish"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/assets/{uuid1}/{uuid2}/{filename}": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description UUID of the asset */
        uuid1: string;
        /** @description UUID of the asset */
        uuid2: string;
        /** @description Filename of the asset */
        filename: string;
      };
      cookie?: never;
    };
    /** get asset content */
    get: operations["AssetContentGet"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/assets/{assetId}/comments": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID of the selected asset */
        assetId: components["parameters"]["assetIdParam"];
      };
      cookie?: never;
    };
    /** get asset comments */
    get: operations["AssetCommentList"];
    put?: never;
    /** create asset comments */
    post: operations["AssetCommentCreate"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/{workspaceIdOrAlias}/projects/{projectIdOrAlias}/assets/{assetId}/comments/{commentId}": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID of the selected asset */
        assetId: components["parameters"]["assetIdParam"];
        /** @description ID of the selected comment */
        commentId: components["parameters"]["commentIdParam"];
      };
      cookie?: never;
    };
    get?: never;
    put?: never;
    post?: never;
    /** delete asset comments */
    delete: operations["AssetCommentDelete"];
    options?: never;
    head?: never;
    /** Update AssetComment */
    patch: operations["AssetCommentUpdate"];
    trace?: never;
  };
}
export type webhooks = Record<string, never>;
export interface components {
  schemas: {
    project: {
      id: string;
      workspaceId: string;
      name: string;
      description: string;
      license: string;
      readme: string;
      alias: string;
      /** Format: date-time */
      createdAt: string;
      /** Format: date-time */
      updatedAt: string;
      accessibility: components["schemas"]["accessibility"];
      requestRoles?: components["schemas"]["projectRequestRole"][];
    };
    publicationSettings: {
      publicModels: string[];
      publicAssets: boolean;
    };
    apiKey: {
      id: string;
      name: string;
      description?: string;
      key: string;
      publication: components["schemas"]["publicationSettings"];
    };
    accessibility: {
      /** @enum {string} */
      visibility: "PUBLIC" | "PRIVATE";
      publication?: components["schemas"]["publicationSettings"];
      apiKeys: components["schemas"]["apiKey"][];
    };
    /** @enum {string} */
    projectRequestRole: "READER" | "WRITER" | "MAINTAINER" | "OWNER";
    model: {
      id?: string;
      projectId?: string;
      schemaId?: string;
      schema?: components["schemas"]["schema"];
      metadataSchemaId?: string;
      metadataSchema?: components["schemas"]["schema"];
      name?: string;
      description?: string;
      key?: string;
      /** Format: date-time */
      createdAt?: string;
      /** Format: date-time */
      updatedAt?: string;
      /** Format: date-time */
      lastModified?: string;
    };
    group: {
      id: string;
      schemaId: string;
      projectId: string;
      name: string;
      description: string;
      key: string;
      schema: components["schemas"]["schema"];
      fields: components["schemas"]["schemaField"][];
    };
    schema: {
      id?: string;
      projectId?: string;
      fields?: components["schemas"]["schemaField"][];
      titleField?: string;
      /** Format: date-time */
      createdAt?: string;
    };
    JSONSchema: Record<string, never>;
    /** @enum {string} */
    valueType:
      | "text"
      | "textArea"
      | "richText"
      | "markdown"
      | "checkbox"
      | "asset"
      | "date"
      | "bool"
      | "select"
      | "integer"
      | "number"
      | "reference"
      | "url"
      | "group"
      | "tag"
      | "geometryObject"
      | "geometryEditor";
    tagResponse: {
      id?: string;
      name?: string;
      color?: string;
    };
    schemaField: {
      id: string;
      type: components["schemas"]["valueType"];
      key: string;
      required: boolean;
      multiple: boolean;
      name: string;
    };
    version: {
      /** Format: uuid */
      version?: string;
      parents?: string[];
      refs?: string[];
    };
    item: {
      id?: string;
      metadataItemId?: string;
      originalItemId?: string;
      modelId?: string;
      fields?: components["schemas"]["field"][];
      metadataFields?: components["schemas"]["field"][];
      referencedItems?: components["schemas"]["item"][];
      /** Format: date-time */
      createdAt?: string;
      isMetadata?: boolean;
      /** Format: date-time */
      updatedAt?: string;
    };
    GeoJSON: Record<string, never>;
    versionedItem: components["schemas"]["item"] &
      components["schemas"]["version"] & {
        referencedItems?: components["schemas"]["versionedItem"][];
      };
    field: {
      id?: string;
      type?: components["schemas"]["valueType"];
      value?: unknown;
      key?: string;
      group?: string;
    };
    refOrVersion: {
      /** @enum {string} */
      ref?: "latest" | "public";
      /** Format: uuid */
      version?: string;
    };
    /** @enum {string} */
    assetEmbedding: "all" | "true" | "false";
    asset: {
      id: string;
      projectId: string;
      name?: string;
      url: string;
      contentType?: string;
      /** @enum {string} */
      previewType?:
        | "image"
        | "image_svg"
        | "geo"
        | "geo_3d_Tiles"
        | "geo_mvt"
        | "model_3d"
        | "csv"
        | "unknown";
      totalSize?: number;
      /** @enum {string} */
      archiveExtractionStatus?: "pending" | "in_progress" | "done" | "failed";
      file?: components["schemas"]["file"];
      /** Format: date-time */
      createdAt: string;
      /** Format: date-time */
      updatedAt: string;
      public: boolean;
    };
    comment: {
      id?: string;
      authorId?: string;
      /** @enum {string} */
      authorType?: "user" | "integrtaion";
      content?: string;
      /** Format: date-time */
      createdAt?: string;
    };
    file: {
      name?: string;
      size?: number;
      contentType?: string;
      path?: string;
      children?: components["schemas"]["file"][];
    };
    fieldSelector: {
      fieldId?: string;
      /** @enum {string} */
      type?:
        | "id"
        | "creationDate"
        | "creationUser"
        | "modificationDate"
        | "modificationUser"
        | "status"
        | "field"
        | "metaField";
    };
    condition: {
      and?: components["schemas"]["condition"][];
      or?: components["schemas"]["condition"][];
      basic?: {
        fieldId?: components["schemas"]["fieldSelector"];
        /** @enum {string} */
        operator?: "equals" | "notEquals";
        value?: unknown;
      };
      nullable?: {
        fieldId?: components["schemas"]["fieldSelector"];
        /** @enum {string} */
        operator?: "empty" | "notEmpty";
      };
      multiple?: {
        fieldId: components["schemas"]["fieldSelector"];
        /** @enum {string} */
        operator:
          | "includesAny"
          | "notIncludesAny"
          | "includesAll"
          | "notIncludesAll";
        value: unknown[];
      };
      bool?: {
        fieldId: components["schemas"]["fieldSelector"];
        /** @enum {string} */
        operator: "equals" | "notEquals";
        value: boolean;
      };
      string?: {
        fieldId: components["schemas"]["fieldSelector"];
        /** @enum {string} */
        operator:
          | "contains"
          | "notContains"
          | "startsWith"
          | "endsWith"
          | "notStartsWith"
          | "notEndsWith";
        value: string;
      };
      number?: {
        fieldId: components["schemas"]["fieldSelector"];
        /** @enum {string} */
        operator:
          | "greaterThan"
          | "lessThan"
          | "greaterThanOrEqualTo"
          | "lessThanOrEqualTo";
        value: number;
      };
      time?: {
        fieldId: components["schemas"]["fieldSelector"];
        /** @enum {string} */
        operator:
          | "before"
          | "after"
          | "beforeOrOn"
          | "afterOrOn"
          | "ofThisWeek"
          | "ofThisMonth"
          | "ofThisYear";
        /** Format: date-time */
        value: string;
      };
    };
  };
  responses: {
    /** @description Access token is missing or invalid */
    UnauthorizedError: {
      headers: {
        [name: string]: unknown;
      };
      content?: never;
    };
    /** @description The requested resource was not found */
    NotFoundError: {
      headers: {
        [name: string]: unknown;
      };
      content?: never;
    };
  };
  parameters: {
    /** @description ID or alias of the workspace */
    workspaceIdOrAliasParam: string;
    /** @description ID or alias of the project */
    projectIdOrAliasParam: string;
    /** @description ID of the schema in the model */
    schemaIdParam: string;
    /** @description ID or key of the model in the project */
    modelIdOrKeyParam: string;
    /** @description ID or key of the group in the project */
    groupIdOrKeyParam: string;
    /** @description ID or key of the field in the models schema */
    fieldIdOrKeyParam: string;
    /** @description ID of the selected item */
    itemIdParam: string;
    /** @description ID of the selected asset */
    assetIdParam: string;
    /** @description ID of the selected comment */
    commentIdParam: string;
    /** @description Used to define the order of the response list */
    sortParam: "createdAt" | "updatedAt";
    /** @description Used to define the order direction of the response list, will be ignored if the order is not presented */
    sortDirParam: "asc" | "desc";
    /** @description Used to select the page */
    pageParam: number;
    /** @description Used to select the page */
    perPageParam: number;
    /** @description Used to select a ref or ver */
    refParam: "latest" | "public";
    /** @description Specifies whether asset data are embedded in the results */
    assetParam: components["schemas"]["assetEmbedding"];
    /** @description keyword string */
    keywordParam: string;
  };
  requestBodies: never;
  headers: never;
  pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
  ProjectFilter: {
    parameters: {
      query?: {
        /** @description Used to select the page */
        page?: components["parameters"]["pageParam"];
        /** @description Used to select the page */
        perPage?: components["parameters"]["perPageParam"];
        /** @description Used to define the order of the response list */
        sort?: components["parameters"]["sortParam"];
        /** @description Used to define the order direction of the response list, will be ignored if the order is not presented */
        dir?: components["parameters"]["sortDirParam"];
        /** @description keyword string */
        keyword?: components["parameters"]["keywordParam"];
      };
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description A JSON array of projects */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            projects?: components["schemas"]["project"][];
            totalCount?: number;
            page?: number;
            perPage?: number;
          };
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  ProjectCreate: {
    parameters: {
      query?: {
        /** @description Used to select the page */
        page?: components["parameters"]["pageParam"];
        /** @description Used to select the page */
        perPage?: components["parameters"]["perPageParam"];
        /** @description Used to define the order of the response list */
        sort?: components["parameters"]["sortParam"];
        /** @description Used to define the order direction of the response list, will be ignored if the order is not presented */
        dir?: components["parameters"]["sortDirParam"];
        /** @description keyword string */
        keyword?: components["parameters"]["keywordParam"];
      };
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": {
          name?: string;
          description?: string;
          license?: string;
          readme?: string;
          alias?: string;
          requestRoles?: components["schemas"]["projectRequestRole"][];
        };
      };
    };
    responses: {
      /** @description A JSON object of the created project */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["project"];
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  ProjectGet: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description A JSON object of the project */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["project"];
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  ProjectDelete: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description The project was deleted successfully */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            id: string;
          };
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  ProjectUpdate: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": {
          name?: string;
          description?: string;
          license?: string;
          readme?: string;
          alias?: string;
          accessibility?: components["schemas"]["accessibility"];
          requestRoles?: components["schemas"]["projectRequestRole"][];
        };
      };
    };
    responses: {
      /** @description A JSON object of the updated project */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["project"];
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      /** @description Project Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  ModelFilter: {
    parameters: {
      query?: {
        /** @description Used to select the page */
        page?: components["parameters"]["pageParam"];
        /** @description Used to select the page */
        perPage?: components["parameters"]["perPageParam"];
        /** @description Used to define the order of the response list */
        sort?: components["parameters"]["sortParam"];
        /** @description Used to define the order direction of the response list, will be ignored if the order is not presented */
        dir?: components["parameters"]["sortDirParam"];
        /** @description keyword string */
        keyword?: components["parameters"]["keywordParam"];
      };
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description A JSON array of user names */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            models?: components["schemas"]["model"][];
            totalCount?: number;
            page?: number;
            perPage?: number;
          };
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  ModelCreate: {
    parameters: {
      query?: {
        /** @description Used to select the page */
        page?: components["parameters"]["pageParam"];
        /** @description Used to select the page */
        perPage?: components["parameters"]["perPageParam"];
        /** @description Used to define the order of the response list */
        sort?: components["parameters"]["sortParam"];
        /** @description Used to define the order direction of the response list, will be ignored if the order is not presented */
        dir?: components["parameters"]["sortDirParam"];
        /** @description keyword string */
        keyword?: components["parameters"]["keywordParam"];
      };
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": {
          name?: string;
          description?: string;
          key?: string;
        };
      };
    };
    responses: {
      /** @description A JSON object of model */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["model"];
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  ModelGet: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID or key of the model in the project */
        modelIdOrKey: components["parameters"]["modelIdOrKeyParam"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description A JSON array of user names */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["model"];
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  ModelDelete: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID or key of the model in the project */
        modelIdOrKey: components["parameters"]["modelIdOrKeyParam"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description The model id */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            id: string;
          };
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  ModelUpdate: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID or key of the model in the project */
        modelIdOrKey: components["parameters"]["modelIdOrKeyParam"];
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": {
          name?: string;
          description?: string;
          key?: string;
        };
      };
    };
    responses: {
      /** @description A JSON object of model */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["model"];
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  SchemaByModelAsJSON: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID or key of the model in the project */
        modelIdOrKey: components["parameters"]["modelIdOrKeyParam"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description A JSON object */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["JSONSchema"];
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  MetadataSchemaByModelAsJSON: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID or key of the model in the project */
        modelIdOrKey: components["parameters"]["modelIdOrKeyParam"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description A JSON object */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["JSONSchema"];
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  ModelImport: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID or key of the model in the project */
        modelIdOrKey: components["parameters"]["modelIdOrKeyParam"];
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": {
          assetId: string;
          /** @enum {string} */
          format: "geoJson" | "json";
          /** @enum {string} */
          strategy: "insert" | "update" | "upsert";
          mutateSchema?: boolean;
          geometryFieldKey?: string;
          asBackground?: boolean;
        };
        "multipart/form-data": {
          /** Format: binary */
          file?: string;
          /** @enum {string} */
          format: "geoJson" | "json";
          /** @enum {string} */
          strategy: "insert" | "update" | "upsert";
          mutateSchema?: boolean;
          geometryFieldKey?: string;
        };
      };
    };
    responses: {
      /** @description A JSON object of import status */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            modelId?: string;
            itemsCount?: number;
            insertedCount?: number;
            updatedCount?: number;
            ignoredCount?: number;
            newFields?: components["schemas"]["schemaField"][];
          };
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  ModelCopy: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID or key of the model in the project */
        modelIdOrKey: components["parameters"]["modelIdOrKeyParam"];
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": {
          name?: string;
          key?: string;
        };
      };
    };
    responses: {
      /** @description A JSON object of field */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["model"];
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  GroupFilter: {
    parameters: {
      query?: {
        /** @description Used to select the page */
        page?: components["parameters"]["pageParam"];
        /** @description Used to select the page */
        perPage?: components["parameters"]["perPageParam"];
        /** @description Used to define the order of the response list */
        sort?: components["parameters"]["sortParam"];
        /** @description Used to define the order direction of the response list, will be ignored if the order is not presented */
        dir?: components["parameters"]["sortDirParam"];
      };
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description A list of groups in the project. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            groups?: components["schemas"]["group"][];
            totalCount?: number;
            page?: number;
            perPage?: number;
          };
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      /** @description Project not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  GroupCreate: {
    parameters: {
      query?: {
        /** @description Used to select the page */
        page?: components["parameters"]["pageParam"];
        /** @description Used to select the page */
        perPage?: components["parameters"]["perPageParam"];
        /** @description Used to define the order of the response list */
        sort?: components["parameters"]["sortParam"];
        /** @description Used to define the order direction of the response list, will be ignored if the order is not presented */
        dir?: components["parameters"]["sortDirParam"];
      };
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": {
          name: string;
          key: string;
          description?: string;
        };
      };
    };
    responses: {
      /** @description The created group. */
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["group"];
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  GroupGet: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID or key of the group in the project */
        groupIdOrKey: components["parameters"]["groupIdOrKeyParam"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Group details. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["group"];
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      /** @description Group not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  GroupDelete: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID or key of the group in the project */
        groupIdOrKey: components["parameters"]["groupIdOrKeyParam"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Group successfully deleted. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            id?: string;
          };
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      /** @description Group not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  GroupUpdate: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID or key of the group in the project */
        groupIdOrKey: components["parameters"]["groupIdOrKeyParam"];
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": {
          name?: string;
          description?: string;
          key?: string;
        };
      };
    };
    responses: {
      /** @description The updated group. */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["group"];
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      /** @description Group not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  FieldCreate: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID of the schema in the model */
        schemaId: components["parameters"]["schemaIdParam"];
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": {
          type?: components["schemas"]["valueType"];
          key?: string;
          required?: boolean;
          multiple?: boolean;
        };
      };
    };
    responses: {
      /** @description A JSON object of field */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["schemaField"];
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  FieldDelete: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID of the schema in the model */
        schemaId: components["parameters"]["schemaIdParam"];
        /** @description ID or key of the field in the models schema */
        fieldIdOrKey: components["parameters"]["fieldIdOrKeyParam"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description A JSON object of field */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            id?: string;
          };
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  FieldUpdate: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID of the schema in the model */
        schemaId: components["parameters"]["schemaIdParam"];
        /** @description ID or key of the field in the models schema */
        fieldIdOrKey: components["parameters"]["fieldIdOrKeyParam"];
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": {
          type?: components["schemas"]["valueType"];
          key?: string;
          required?: boolean;
          multiple?: boolean;
        };
      };
    };
    responses: {
      /** @description A JSON object of field */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["schemaField"];
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  ItemFilter: {
    parameters: {
      query?: {
        /** @description Used to define the order of the response list */
        sort?: components["parameters"]["sortParam"];
        /** @description Used to define the order direction of the response list, will be ignored if the order is not presented */
        dir?: components["parameters"]["sortDirParam"];
        /** @description Used to select the page */
        page?: components["parameters"]["pageParam"];
        /** @description Used to select the page */
        perPage?: components["parameters"]["perPageParam"];
        /** @description Used to select a ref or ver */
        ref?: components["parameters"]["refParam"];
        /** @description Specifies whether asset data are embedded in the results */
        asset?: components["parameters"]["assetParam"];
        /** @description keyword string */
        keyword?: components["parameters"]["keywordParam"];
      };
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID or key of the model in the project */
        modelIdOrKey: components["parameters"]["modelIdOrKeyParam"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description A JSON array of user names */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            items?: components["schemas"]["versionedItem"][];
            totalCount?: number;
            page?: number;
            perPage?: number;
          };
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  ItemCreate: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID or key of the model in the project */
        modelIdOrKey: components["parameters"]["modelIdOrKeyParam"];
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": {
          fields?: components["schemas"]["field"][];
          metadataFields?: components["schemas"]["field"][];
        };
      };
    };
    responses: {
      /** @description A JSON array of user names */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["versionedItem"];
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  ItemFilterPost: {
    parameters: {
      query?: {
        /** @description Used to define the order of the response list */
        sort?: components["parameters"]["sortParam"];
        /** @description Used to define the order direction of the response list, will be ignored if the order is not presented */
        dir?: components["parameters"]["sortDirParam"];
        /** @description Used to select the page */
        page?: components["parameters"]["pageParam"];
        /** @description Used to select the page */
        perPage?: components["parameters"]["perPageParam"];
        /** @description Used to select a ref or ver */
        ref?: components["parameters"]["refParam"];
        /** @description Specifies whether asset data are embedded in the results */
        asset?: components["parameters"]["assetParam"];
        /** @description keyword string */
        keyword?: components["parameters"]["keywordParam"];
      };
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID or key of the model in the project */
        modelIdOrKey: components["parameters"]["modelIdOrKeyParam"];
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": {
          filter?: components["schemas"]["condition"];
        };
      };
    };
    responses: {
      /** @description Paginated list of items */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            items?: components["schemas"]["versionedItem"][];
            totalCount?: number;
            page?: number;
            perPage?: number;
          };
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  ItemsAsGeoJSON: {
    parameters: {
      query?: {
        /** @description Used to select the page */
        page?: components["parameters"]["pageParam"];
        /** @description Used to select the page */
        perPage?: components["parameters"]["perPageParam"];
        /** @description Used to select a ref or ver */
        ref?: components["parameters"]["refParam"];
      };
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID or key of the model in the project */
        modelIdOrKey: components["parameters"]["modelIdOrKeyParam"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description A GeoJSON object */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/octet-stream": components["schemas"]["GeoJSON"];
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  ItemsAsCSV: {
    parameters: {
      query?: {
        /** @description Used to select the page */
        page?: components["parameters"]["pageParam"];
        /** @description Used to select the page */
        perPage?: components["parameters"]["perPageParam"];
        /** @description Used to select a ref or ver */
        ref?: components["parameters"]["refParam"];
      };
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID or key of the model in the project */
        modelIdOrKey: components["parameters"]["modelIdOrKeyParam"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description A string in CSV format */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "text/csv": string;
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  ItemGet: {
    parameters: {
      query?: {
        /** @description Used to select a ref or ver */
        ref?: components["parameters"]["refParam"];
        /** @description Specifies whether asset data are embedded in the results */
        asset?: components["parameters"]["assetParam"];
      };
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID or key of the model in the project */
        modelIdOrKey: components["parameters"]["modelIdOrKeyParam"];
        /** @description ID of the selected item */
        itemId: components["parameters"]["itemIdParam"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description An item */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["versionedItem"];
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  ItemDelete: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID or key of the model in the project */
        modelIdOrKey: components["parameters"]["modelIdOrKeyParam"];
        /** @description ID of the selected item */
        itemId: components["parameters"]["itemIdParam"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description delete an item */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            id?: string;
          };
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  ItemUpdate: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID or key of the model in the project */
        modelIdOrKey: components["parameters"]["modelIdOrKeyParam"];
        /** @description ID of the selected item */
        itemId: components["parameters"]["itemIdParam"];
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": {
          fields?: components["schemas"]["field"][];
          metadataFields?: components["schemas"]["field"][];
          asset?: components["schemas"]["assetEmbedding"];
        };
      };
    };
    responses: {
      /** @description An item */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["versionedItem"];
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  ItemPublish: {
    parameters: {
      query?: {
        /** @description Specifies whether asset data are embedded in the results */
        asset?: components["parameters"]["assetParam"];
      };
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID or key of the model in the project */
        modelIdOrKey: components["parameters"]["modelIdOrKeyParam"];
        /** @description ID of the selected item */
        itemId: components["parameters"]["itemIdParam"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description the published item */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["versionedItem"];
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  ItemCommentList: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID or key of the model in the project */
        modelIdOrKey: components["parameters"]["modelIdOrKeyParam"];
        /** @description ID of the selected item */
        itemId: components["parameters"]["itemIdParam"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description item comments list */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            comments?: components["schemas"]["comment"][];
          };
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  ItemCommentCreate: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID or key of the model in the project */
        modelIdOrKey: components["parameters"]["modelIdOrKeyParam"];
        /** @description ID of the selected item */
        itemId: components["parameters"]["itemIdParam"];
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": {
          content?: string;
        };
      };
    };
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["comment"];
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  ItemCommentDelete: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID or key of the model in the project */
        modelIdOrKey: components["parameters"]["modelIdOrKeyParam"];
        /** @description ID of the selected item */
        itemId: components["parameters"]["itemIdParam"];
        /** @description ID of the selected comment */
        commentId: components["parameters"]["commentIdParam"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description delete an item comment */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            id?: string;
          };
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  ItemCommentUpdate: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID or key of the model in the project */
        modelIdOrKey: components["parameters"]["modelIdOrKeyParam"];
        /** @description ID of the selected item */
        itemId: components["parameters"]["itemIdParam"];
        /** @description ID of the selected comment */
        commentId: components["parameters"]["commentIdParam"];
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": {
          content?: string;
        };
      };
    };
    responses: {
      /** @description Update An item comment */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["comment"];
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  AssetFilter: {
    parameters: {
      query?: {
        /** @description Used to define the order of the response list */
        sort?: components["parameters"]["sortParam"];
        /** @description Used to define the order direction of the response list, will be ignored if the order is not presented */
        dir?: components["parameters"]["sortDirParam"];
        /** @description Used to select the page */
        page?: components["parameters"]["pageParam"];
        /** @description Used to select the page */
        perPage?: components["parameters"]["perPageParam"];
        /** @description keyword string */
        keyword?: components["parameters"]["keywordParam"];
      };
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description assets list */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            items?: components["schemas"]["asset"][];
            totalCount?: number;
            page?: number;
            perPage?: number;
          };
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  AssetCreate: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "multipart/form-data": {
          /** Format: binary */
          file?: string;
          contentType?: string;
          contentEncoding?: string;
          /** @default false */
          skipDecompression?: boolean;
        };
        "application/json": {
          url?: string;
          token?: string;
          /** @default false */
          skipDecompression?: boolean | null;
          contentEncoding?: string;
        };
      };
    };
    responses: {
      /** @description assets */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["asset"];
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  AssetBatchDelete: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": {
          assetIDs?: string[];
        };
      };
    };
    responses: {
      /** @description assets list */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            ids?: string[];
          };
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  AssetUploadCreate: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": {
          name?: string;
          contentLength?: number;
          contentType?: string;
          contentEncoding?: string;
          cursor?: string;
        };
      };
    };
    responses: {
      /** @description asset upload */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            url?: string;
            token?: string;
            contentType?: string;
            contentLength?: number;
            contentEncoding?: string;
            next?: string;
          };
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  AssetGet: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID of the selected asset */
        assetId: components["parameters"]["assetIdParam"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description assets list */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["asset"];
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  AssetDelete: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID of the selected asset */
        assetId: components["parameters"]["assetIdParam"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description assets list */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            id?: string;
          };
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  AssetPublish: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID of the selected asset */
        assetId: components["parameters"]["assetIdParam"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description assets list */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["asset"];
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  AssetUnpublish: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID of the selected asset */
        assetId: components["parameters"]["assetIdParam"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description assets list */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["asset"];
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  AssetContentGet: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description UUID of the asset */
        uuid1: string;
        /** @description UUID of the asset */
        uuid2: string;
        /** @description Filename of the asset */
        filename: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description the binary content of the asset */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/octet-stream": string;
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  AssetCommentList: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID of the selected asset */
        assetId: components["parameters"]["assetIdParam"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description asset comments list */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            comments?: components["schemas"]["comment"][];
          };
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  AssetCommentCreate: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID of the selected asset */
        assetId: components["parameters"]["assetIdParam"];
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": {
          content?: string;
        };
      };
    };
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["comment"];
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  AssetCommentDelete: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID of the selected asset */
        assetId: components["parameters"]["assetIdParam"];
        /** @description ID of the selected comment */
        commentId: components["parameters"]["commentIdParam"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description delete an asset comment */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            id?: string;
          };
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  AssetCommentUpdate: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description ID or alias of the workspace */
        workspaceIdOrAlias: components["parameters"]["workspaceIdOrAliasParam"];
        /** @description ID or alias of the project */
        projectIdOrAlias: components["parameters"]["projectIdOrAliasParam"];
        /** @description ID of the selected asset */
        assetId: components["parameters"]["assetIdParam"];
        /** @description ID of the selected comment */
        commentId: components["parameters"]["commentIdParam"];
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": {
          content?: string;
        };
      };
    };
    responses: {
      /** @description Update An asset comment */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["comment"];
        };
      };
      /** @description Invalid request parameter value */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
}
