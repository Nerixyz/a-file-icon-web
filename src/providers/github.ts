import select from 'select-dom';
import { getAssociation, getFileIconName, getFileIcon } from '~associations/files';
import { getFolderIconName, getFolderAssociation, getFolderIcon } from '~associations/folders';

export const injectIconsGithub = (target: ParentNode) => {
  const $items = select.all('.js-navigation-item', target);
  const isDark = select('html').dataset['colorMode'] === 'dark';

  $items.forEach(async (item, index) => {
    const isFile = select.exists('.octicon-file', item);
    const isDir = select.exists('.octicon-file-directory-fill', item);
    const isSvg = select.exists('.octicon-file-text', item);
    const name = select('.js-navigation-open', item)?.textContent;
    const $icon = select('.octicon', item);

    if (isFile || isSvg) {
      let assoc = getAssociation(name);
      let className = getFileIconName(assoc);

      const icon = getFileIcon(className, isDark);
      $icon.outerHTML = icon.replace('<svg', '<svg class="octicon octicon-file" width="20" height="20"');

      if (isSvg) {
        select('svg', item).remove();
      }
    }
    else if (isDir) {
      let assoc = getFolderAssociation(name);
      let className = getFolderIconName(assoc);

      const icon = getFolderIcon(className);
      $icon.outerHTML =
        icon.replace('<svg', '<svg class="octicon octicon-file-directory" width="20" height="20"');
    }
  });
};