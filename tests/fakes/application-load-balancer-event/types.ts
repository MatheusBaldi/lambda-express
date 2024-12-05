export interface FakeALBEventRequestContext {
   elb: {
       targetGroupArn: string;
   };
}

export interface FakeALBEventQueryStringParameters {
    [name: string]: string | undefined;
}

export interface FakeALBEventHeaders {
    [name: string]: string | undefined;
}

export interface FakeALBEventMultiValueHeaders {
    [name: string]: string[] | undefined;
}

export interface FakeALBEventMultiValueQueryStringParameters {
    [name: string]: string[] | undefined;
}

export interface FakeALBEvent {
   requestContext: FakeALBEventRequestContext;
   httpMethod: string;
   path: string;
   queryStringParameters?: FakeALBEventQueryStringParameters | undefined; // URL encoded
   headers?: FakeALBEventHeaders | undefined;
   multiValueQueryStringParameters?: FakeALBEventMultiValueQueryStringParameters | undefined; // URL encoded
   multiValueHeaders?: FakeALBEventMultiValueHeaders | undefined;
   body: string | null;
   isBase64Encoded: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FakeApplicationLoadBalancerRequestEvent extends FakeALBEvent {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FakeApplicationLoadBalancerEventRequestContext extends FakeALBEventRequestContext {}
