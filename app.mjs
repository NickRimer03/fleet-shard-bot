import bot from "./bot.mjs";

if (process.env.BUILD_MODE !== "production") {
  Promise.all([import("dotenv"), import("path")]).then(
    ([
      {
        default: { config },
      },
      path,
    ]) => {
      config({ path: path.resolve() + "/.env" });
      bot();
    }
  );
} else {
  bot();
}
