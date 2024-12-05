import { FakeAPIGatewayEventIdentity, FakeAPIGatewayRequestEvent } from './types';

export const makeFakeAPIGatewayRequestContextIdentity = (params?: Partial<FakeAPIGatewayEventIdentity>): FakeAPIGatewayEventIdentity => {
   return {
      accessKey: params?.accessKey ?? null,
      accountId: params?.accountId ?? null,
      apiKey: params?.apiKey ?? null,
      apiKeyId: params?.apiKeyId ?? null,
      caller: params?.caller ?? null,
      clientCert: params?.clientCert ?? null,
      cognitoAuthenticationProvider: params?.cognitoAuthenticationProvider ?? null,
      cognitoAuthenticationType: params?.cognitoAuthenticationType ?? null,
      cognitoIdentityId: params?.cognitoIdentityId ?? null,
      cognitoIdentityPoolId: params?.cognitoIdentityPoolId ?? null,
      principalOrgId: params?.principalOrgId ?? null,
      sourceIp: params?.sourceIp ?? '12.12.12.12',
      user: params?.user ?? null,
      userAgent: params?.userAgent ?? 'curl/7.54.0',
      userArn: params?.userArn ?? null,
   };
};

export const makeFakeAPIGatewayRequestContext = (params?: Partial<FakeAPIGatewayRequestEvent['requestContext']>): FakeAPIGatewayRequestEvent['requestContext'] => {
   return {
      accountId: params?.accountId ?? '123456789012',
      apiId: params?.apiId ?? 'someapi',
      authorizer: params?.authorizer ?? null,
      httpMethod: params?.httpMethod ?? 'GET',
      path: params?.path ?? '/prd',
      protocol: params?.protocol ?? 'HTTP/1.1',
      stage: params?.stage ?? 'prd',
      requestId: params?.requestId ?? 'a507736b-259e-11e9-8fcf-4f1f08c4591e',
      requestTimeEpoch: params?.requestTimeEpoch ?? 1548969891530,
      resourceId: params?.resourceId ?? 'reas23acc',
      identity: params?.identity ?? makeFakeAPIGatewayRequestContextIdentity(params?.identity),
      resourcePath: params?.resourcePath ?? '/',
   };
};

export const makeFakeAPIGatewayEvent = (params?: Partial<FakeAPIGatewayRequestEvent>): FakeAPIGatewayRequestEvent => {
   return {
      body: params?.body ?? null,
      httpMethod: params?.httpMethod ?? 'GET',
      isBase64Encoded: params?.isBase64Encoded ?? false,
      path: params?.path ?? '/echo/asdf/a',
      resource: params?.resource ?? '/{proxy+}',
      pathParameters: params?.pathParameters ?? { proxy: 'echo/asdf/a' },
      stageVariables: params?.stageVariables ?? null,
      requestContext: params?.requestContext ?? makeFakeAPIGatewayRequestContext(params?.requestContext),
      headers: params?.headers ?? {
         Accept: '*/*',
         'CloudFront-Forwarded-Proto': 'https',
         'CloudFront-Is-Desktop-Viewer': 'true',
         'CloudFront-Is-Mobile-Viewer': 'false',
         'CloudFront-Is-SmartTV-Viewer': 'false',
         'CloudFront-Is-Tablet-Viewer': 'false',
         'CloudFront-Viewer-Country': 'US',
         Host: 'b5gee6dacf.execute-api.us-east-1.amazonaws.com',
         'User-Agent': 'curl/7.54.0',
         Via: '2.0 4ee511e558a0400aa4b9c1d34d92af5a.cloudfront.net (CloudFront)',
         'X-Amz-Cf-Id': 'xn-ohXlUAed-32bae2cfb7164fd690ffffb87d36b032==',
         'X-Amzn-Trace-Id': 'Root=1-4b5398e2-a7fbe4f92f2e911013cba76b',
         'X-Forwarded-For': '8.8.8.8, 2.3.4.5',
         'X-Forwarded-Port': '443',
         'X-Forwarded-Proto': 'https',
         Referer: 'https://en.wikipedia.org/wiki/HTTP_referer',
         Cookie: 'uid=abc; ga=1234; foo=bar; baz=foo%5Ba%5D; obj=j%3A%7B%22abc%22%3A123%7D; onechar=j; bad=j%3A%7Ba%7D',
      },
      multiValueHeaders: params?.multiValueHeaders ?? {
         Accept: [ '*/*' ],
         Foo: [ 'bar', 'baz' ],
         'CloudFront-Forwarded-Proto': [ 'https' ],
         'CloudFront-Is-Desktop-Viewer': [ 'true' ],
         'CloudFront-Is-Mobile-Viewer': [ 'false' ],
         'CloudFront-Is-SmartTV-Viewer': [ 'false' ],
         'CloudFront-Is-Tablet-Viewer': [ 'false' ],
         'CloudFront-Viewer-Country': [ 'US' ],
         Host: [ 'b5gee6dacf.execute-api.us-east-1.amazonaws.com' ],
         'User-Agent': [ 'curl/7.54.0' ],
         Via: [ '2.0 4ee511e558a0400aa4b9c1d34d92af5a.cloudfront.net (CloudFront)' ],
         'X-Amz-Cf-Id': [ 'xn-ohXlUAed-32bae2cfb7164fd690ffffb87d36b032==' ],
         'X-Amzn-Trace-Id': [ 'Root=1-4b5398e2-a7fbe4f92f2e911013cba76b' ],
         'X-Forwarded-For': [ '8.8.8.8, 2.3.4.5' ],
         'X-Forwarded-Port': [ '443' ],
         'X-Forwarded-Proto': [ 'https' ],
         Referer: [ 'https://en.wikipedia.org/wiki/HTTP_referer' ],
         Cookie: [ 'uid=abc; ga=1234; foo=bar; baz=foo%5Ba%5D; obj=j%3A%7B%22abc%22%3A123%7D; onechar=j; bad=j%3A%7Ba%7D' ],
      },
      queryStringParameters: params?.queryStringParameters ?? {
         'foo[a]': 'bar b',
         x: '2',
         y: 'z',
      },
      multiValueQueryStringParameters: params?.multiValueQueryStringParameters ?? {
         'foo[a]': [ 'bar b', 'baz c' ],
         x: [ '1', '2' ],
         y: [ 'z' ],
      },
   };
};
