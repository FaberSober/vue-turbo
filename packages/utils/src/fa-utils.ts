export function isNil(value: any) {
  return value === null || value === undefined;
}

export function trim(value: string) {
  return isNil(value) ? '' : value.toString().trim();
}

/**
 * 复制文本到剪贴板 FIXME: not working
 */
export function copyText(text: string) {
  if (trim(text) === '') {
    return;
  }
  const textarea = document.createElement('textarea');
  textarea.setAttribute('readonly', 'readonly');
  textarea.innerText = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
}
