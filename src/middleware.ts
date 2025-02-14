import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/api/clerk-webhook",
  "/api/drive-activity/notification",
  "/api/payment/success",
]);

const isIgnoredRoute = createRouteMatcher([
  "/api/auth/callback/discord",
  "/api/auth/callback/notion",
  "/api/auth/callback/slack",
  "/api/flow",
  "/api/cron/wait",
]);

export default clerkMiddleware((auth, req) => {
  if (isIgnoredRoute(req)) {
    return;
  }

  //   if (isPublicRoute(req)) {
  //     auth().protect({ required: false });
  //   } else {
  //     auth().protect();
  //   }
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
