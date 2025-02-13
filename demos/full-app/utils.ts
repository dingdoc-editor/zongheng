const isArray = (v: unknown): v is any[] => Array.isArray(v);
const isFunc = (v: unknown): v is (...args) => any => (typeof v === 'function');

enum FileTypeEnum {
  IMAGE = "0",
  EMBED = "2",
  OP = "3",
  CP = "4",
  DUAL_LINK_CONTEXT = "7",
  TMP_CP = "9",
  TMP_IMG = "11",
  IMAGE_S = "12",
  EMBED_S = "13"
}

interface UploadResult {
  resourceId: string;
  storagePath: string;
  contentType: string;
  resourceUrl: string;
}

const fileMaps = new Map<string, string>();

async function upload(file: File, fileType: FileTypeEnum, onProgress?: (p: number) => void): Promise<UploadResult> {
  const url = URL.createObjectURL(file);
  const key = `file-${Math.random()}`;
  fileMaps.set(key, url);
  return new Promise((resolve, reject) => {
    let p = 0;
    const timer = setInterval(() => {
      p += 5;
      if (p < 100) {
        onProgress && onProgress(p);
      } else {
        clearInterval(timer);
        resolve({
          resourceUrl: url,
          resourceId: key,
          contentType: file.type,
          storagePath: '',
        });
      }
    }, 100);
  });
}

export const uploadImages = async (...argvs) => {
  if (argvs.length > 0 && isArray(argvs[0]) && argvs[0][0] instanceof File) {
    const result = await upload(
      argvs[0][0],
      FileTypeEnum.IMAGE,
      (p: number) => {
        if (argvs[1] && isFunc(argvs[1])) {
          argvs[1](Math.floor(p * 10) * 10);
        }
      },
    );
    if (result && result.resourceUrl) {
      return [result];
    }
  }
  return [];
};

let fileInput: HTMLInputElement | undefined;
export const selectFiles = (accept = '', multiple = false): Promise<any> => {
  const promise = new Promise((resolve) => {
    if (!fileInput) {
      fileInput = document.createElement('input');
      fileInput.setAttribute('type', 'file');
      fileInput.setAttribute('style', 'display:none');
      // 容器 bug 可能导致 onChange 不触发
      // HACK：加入到 body 可解决
      document.body.appendChild(fileInput);
    }
    fileInput.setAttribute('accept', accept);
    fileInput.multiple = multiple;

    fileInput.onchange = () => {
      const { files } = fileInput!;
      resolve(Array.from(files!));
      fileInput!.value = '';
    };
    fileInput.click();
  });
  return promise;
};

export const selectImages = async () => await selectFiles('image/*', false);