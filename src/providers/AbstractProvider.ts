import { getAssociation, getFileIconName, getFileIcon } from '~associations/files';
import { bigger, wrapSvg } from '~associations/utils';
import { getFolderAssociation, getFolderIconName, getFolderIcon } from '~associations/folders';
import select from 'select-dom';
import { iconSize, iconColor } from '~common/storage';

export type IconProvider = {
  dirClass: string;
  fileClass: string;
  iconClass: string;
  itemsClass: string;
  nameClass: string;
  svgClass?: string;
  injectIcons();
}

export abstract class AbstractProvider implements IconProvider {
  constructor(readonly target: ParentNode) {
  }

  abstract get itemsClass(): string;

  abstract get fileClass(): string;

  abstract get dirClass(): string;

  abstract get nameClass(): string;

  abstract get iconClass(): string;

  abstract get svgClass(): string | undefined;

  injectIcons = async () => {
    const $items = select.all(this.itemsClass, this.target);
    const isDark = select('html').dataset['colorMode'] === 'dark';
    const size = Number(await iconSize() || 20);
    const color = await iconColor();

    $items.forEach(async (item, index) => {
      const isFile = select.exists(this.fileClass, item);
      const isDir = select.exists(this.dirClass, item);

      const name = select(this.nameClass, item)?.textContent?.trim();
      const $icon = select(this.iconClass, item);

      if (isFile) {
        let assoc = getAssociation(name);
        let className = getFileIconName(assoc);

        const svg = getFileIcon(className, isDark);
        const icon = await wrapSvg(svg);

        $icon.outerHTML = bigger(icon, size);
      }
      else if (isDir) {
        let assoc = getFolderAssociation(name);
        let className = getFolderIconName(assoc);

        const svg = getFolderIcon(className);
        let icon = await wrapSvg(svg);

        // if (color) {
        //   icon = withColor(icon, color);
        // }

        $icon.outerHTML = bigger(icon, size);
      }
    });
  };
}
