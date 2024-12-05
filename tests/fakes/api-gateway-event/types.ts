export interface FakeAPIGatewayProxyEventHeaders {
   [name: string]: string | undefined;
}

export interface FakeAPIGatewayProxyEventMultiValueHeaders {
   [name: string]: string[] | undefined;
}

export interface FakeAPIGatewayProxyEventPathParameters {
   [name: string]: string | undefined;
}

export interface FakeAPIGatewayProxyEventQueryStringParameters {
   [name: string]: string | undefined;
}

export interface FakeAPIGatewayProxyEventMultiValueQueryStringParameters {
   [name: string]: string[] | undefined;
}

export interface FakeAPIGatewayProxyEventStageVariables {
   [name: string]: string | undefined;
}

export interface FakeAPIGatewayEventRequestContextWithAuthorizer<TAuthorizerContext> {
   accountId: string;
   apiId: string;
   authorizer: TAuthorizerContext;
   connectedAt?: number | undefined;
   connectionId?: string | undefined;
   domainName?: string | undefined;
   domainPrefix?: string | undefined;
   eventType?: string | undefined;
   extendedRequestId?: string | undefined;
   protocol: string;
   httpMethod: string;
   identity: FakeAPIGatewayEventIdentity;
   messageDirection?: string | undefined;
   messageId?: string | null | undefined;
   path: string;
   stage: string;
   requestId: string;
   requestTime?: string | undefined;
   requestTimeEpoch: number;
   resourceId: string;
   resourcePath: string;
   routeKey?: string | undefined;
}

export interface FakeAPIGatewayEventIdentity {
   accessKey: string | null;
   accountId: string | null;
   apiKey: string | null;
   apiKeyId: string | null;
   caller: string | null;
   clientCert: FakeAPIGatewayEventClientCertificate | null;
   cognitoAuthenticationProvider: string | null;
   cognitoAuthenticationType: string | null;
   cognitoIdentityId: string | null;
   cognitoIdentityPoolId: string | null;
   principalOrgId: string | null;
   sourceIp: string;
   user: string | null;
   userAgent: string | null;
   userArn: string | null;
}

export interface FakeAPIGatewayEventClientCertificate {
   clientCertPem: string;
   serialNumber: string;
   subjectDN: string;
   issuerDN: string;
   validity: {
      notAfter: string;
      notBefore: string;
   };
}

export interface FakeAPIGatewayProxyEventBase<TAuthorizerContext> {
   body: string | null;
   headers: FakeAPIGatewayProxyEventHeaders;
   multiValueHeaders: FakeAPIGatewayProxyEventMultiValueHeaders;
   httpMethod: string;
   isBase64Encoded: boolean;
   path: string;
   pathParameters: FakeAPIGatewayProxyEventPathParameters | null;
   queryStringParameters: FakeAPIGatewayProxyEventQueryStringParameters | null;
   multiValueQueryStringParameters: FakeAPIGatewayProxyEventMultiValueQueryStringParameters | null;
   stageVariables: FakeAPIGatewayProxyEventStageVariables | null;
   requestContext: FakeAPIGatewayEventRequestContextWithAuthorizer<TAuthorizerContext>;
   resource: string;
}

export type APIGatewayEventDefaultAuthorizerContext =
   | undefined
   | null
   | {
      [name: string]: any;
   };

export type FakeAPIGatewayProxyEvent = FakeAPIGatewayProxyEventBase<APIGatewayEventDefaultAuthorizerContext>;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FakeAPIGatewayRequestEvent extends FakeAPIGatewayProxyEvent { }
