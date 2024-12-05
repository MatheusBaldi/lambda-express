import { FakeApplicationLoadBalancerEventRequestContext, FakeApplicationLoadBalancerRequestEvent } from './types';

export function makeFakeALBRequestContext(params?: Partial<FakeApplicationLoadBalancerEventRequestContext>): FakeApplicationLoadBalancerEventRequestContext {
   return {
      elb: params?.elb ?? {
         targetGroupArn: 'arn:aws:elasticloadbalancing:us-east-1:123456789012:targetgroup/alb-lambda-prd-tg1/180d40bbdb377b34',
      },
   };
}

export function makeFakeALBEventBase(params?: Partial<FakeApplicationLoadBalancerRequestEvent>): FakeApplicationLoadBalancerRequestEvent {
   return {
      body: params?.body ?? '',
      httpMethod: params?.httpMethod ?? 'GET',
      isBase64Encoded: params?.isBase64Encoded ?? false,
      path: params?.path ?? '/echo/asdf/a',
      requestContext: params?.requestContext ?? makeFakeALBRequestContext(params?.requestContext),
   };
}

export function makeFakeALBEvent(params?: Partial<FakeApplicationLoadBalancerRequestEvent>): FakeApplicationLoadBalancerRequestEvent {
   return {
      ...makeFakeALBEventBase(params),
      ...{
         queryStringParameters: params?.queryStringParameters ?? {
            'foo%5Ba%5D': 'baz%20c',
            x: '2',
            y: 'z',
         },
         headers: params?.headers ?? {
            accept: '*/*',
            foo: 'baz',
            host: 'alb-lambda-prd-123456806.us-east-1.elb.amazonaws.com',
            'user-agent': 'curl/7.54.0',
            'x-amzn-trace-id': 'Root=1-4b5398e2-a7fbe4f92f2e911013cba76b',
            'x-forwarded-for': '8.8.8.8, 2.3.4.5',
            'x-forwarded-port': '80',
            'x-forwarded-proto': 'http',
            // Using "referer" (one "r") on this request, and "referrer" (two) below
            referer: 'https://en.wikipedia.org/wiki/HTTP_referer',
            cookie: 'uid=abc; ga=1234; foo=bar; baz=foo%5Ba%5D; obj=j%3A%7B%22abc%22%3A123%7D; onechar=j; bad=j%3A%7Ba%7D',
         },
      },
   };
}

export function makeFakeALBMultiValHeadersEvent(params?: Partial<FakeApplicationLoadBalancerRequestEvent>): FakeApplicationLoadBalancerRequestEvent {
   return {
      ...makeFakeALBEventBase(params),
      ...{
         multiValueQueryStringParameters: params?.multiValueQueryStringParameters ?? {
            'foo%5Ba%5D': [ 'bar%20b', 'baz c' ],
            x: [ '1', '2' ],
            y: [ 'z' ],
         },
         multiValueHeaders: params?.multiValueHeaders ?? {
            accept: [ '*/*' ],
            foo: [ 'bar', 'baz' ],
            host: [ 'alb-lambda-prd-123456806.us-east-1.elb.amazonaws.com' ],
            'user-agent': [ 'curl/7.54.0' ],
            'x-amzn-trace-id': [ 'Root=1-4b5398e2-a7fbe4f92f2e911013cba76b' ],
            'x-forwarded-for': [ '8.8.8.8, 2.3.4.5' ],
            'x-forwarded-port': [ '80' ],
            'x-forwarded-proto': [ 'http' ],
            // Using "referrer" (two "r"s) on this request, and "referer" (one) above
            referrer: [ 'https://en.wikipedia.org/wiki/HTTP_referer' ],
            cookie: [ 'uid=abc; ga=1234; foo=bar; baz=foo%5Ba%5D; obj=j%3A%7B%22abc%22%3A123%7D; onechar=j; bad=j%3A%7Ba%7D' ],
         },
      },
   };
}
