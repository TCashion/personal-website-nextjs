const { ReadableStream, TransformStream } = require('stream/web');
const { TextDecoder, TextEncoder } = require('util');

if (!global.TextEncoder) {
  global.TextEncoder = TextEncoder;
}

if (!global.TextDecoder) {
  global.TextDecoder = TextDecoder;
}

if (!global.ReadableStream) {
  global.ReadableStream = ReadableStream;
}

if (!global.TransformStream) {
  global.TransformStream = TransformStream;
}

if (!global.Request || !global.Response || !global.Headers || !global.fetch) {
  const {
    fetch,
    Request,
    Response,
    Headers,
    FormData,
  } = require('next/dist/compiled/@edge-runtime/primitives/fetch');

  global.fetch = fetch;
  global.Request = Request;
  global.Response = Response;
  global.Headers = Headers;
  global.FormData = FormData;
}
