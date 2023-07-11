import {Router} from "express";
import {readdirSync} from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFileName = (fileName:string) => {
  const file = fileName.split('.').shift();
  return file;
}

readdirSync(PATH_ROUTER).filter((fileName) => {
  const endpoint = cleanFileName(fileName);
  if (endpoint !== "index"){
    import(`./${endpoint}`).then((moduleRouter) => {
      router.use(`/${endpoint}`, moduleRouter.router);
    })
  }
})

export { router };