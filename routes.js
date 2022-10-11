import { Router } from "@layer0/core/router";
import { nextRoutes, renderNextPage } from "@layer0/next";

export default new Router()
  .match(
    {
      path: "/",
      cookies: {
        __prerender_bypass: /.*/g,
        __next_preview_data: /.*/g,
      },
    },
    (res) => {
      res.cache({
        edge: false,
        browser: false,
      });
      renderNextPage("/", res);
    }
  )
  .match(
    {
      path: "/",
      cookies: {
        __prerender_bypass: null,
        __next_preview_data: null,
      },
    },
    ({ cache }) => {
      cache({
        edge: {
          maxAgeSeconds: 60 * 60 * 24,
        },
        browser: false,
      });
    }
  )
  .use(nextRoutes);
