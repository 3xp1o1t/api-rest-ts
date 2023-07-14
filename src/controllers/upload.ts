import { Response } from "express";
import { RequestExt } from "../interfaces/req-ext.interface";
import { Storage } from "../interfaces/storage.interface";
import { registerUpload } from "../services/storage";
import { handleHttp } from "../utils/error.handle";

const getFile = async (req: RequestExt, res: Response) => {
  try {
    const { user, file } = req;
    // el objeto file ^ tiene las propiedades del archivo, (mimetype, size, encoding, etc) para hacer validacion por ejemplo.
    const data: Storage = {
      fileName: `${file?.filename}`,
      idUser: `${user?.id}`,
      path: `${file?.path}`
    };
    const response = await registerUpload(data);
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_WHEN_UPLOADING");
  }
}

export { getFile };