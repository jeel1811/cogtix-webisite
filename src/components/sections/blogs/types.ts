export interface BlogImageNode {
  mediaItemUrl: string;
}

export interface BlogImage {
  node?: BlogImageNode;
}

export interface BlogFields {
  blogTitle?: string;
  blogCategory?: string;
  previewDesc?: string;
  blogDescription?: string;
  featuredImage?: {
    mediaItemUrl?: string;
    mediaType?: string;
    mimeType?: string;
  };
  fieldGroupName?: string;
}

export interface BlogTagNode {
  slug: string;
  name: string;
}

export interface BlogTags {
  nodes: BlogTagNode[];
}

export interface BlogNode {
  id: string;
  databaseId: number;
  slug: string;
  title: string;
  date: string;
  modified: string;
  content?: string;
  featuredImage: BlogImage;
  blogs?: BlogFields;
  tags?: BlogTags;
}

export interface BlogEdge {
  node: BlogNode;
}

export interface BlogsConnection {
  edges: BlogEdge[];
  pageInfo: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    endCursor: string;
    startCursor: string;
  };
}
