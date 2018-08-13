import { Accessibility } from '../../interfaces'
import { KeyCodes } from '../../../KeyCodes'

const BasicMenuItemBehavior: Accessibility = (props: any) => ({
  attributes: {
    root: {
      role: 'presentation',
    },
    anchor: {
      role: 'menuitem',
      'aria-expanded': props['submenuOpened'],
      tabIndex: '0',
    },
  },

  actionsDefinition: {
    closeSubmenu: {
      keyCombinations: [
        { keyCode: KeyCodes.escape },
        { keyCode: KeyCodes.right },
        { keyCode: KeyCodes.left },
      ],
    },
    openSubmenu: {
      keyCombinations: [
        { keyCode: KeyCodes.enter },
        { keyCode: KeyCodes.space },
        { keyCode: KeyCodes.down },
      ],
    },
    openSubmenuAndFocusLast: {
      keyCombinations: [{ keyCode: KeyCodes.up }],
    },
  },
})

export default BasicMenuItemBehavior

interface INavigable {
  next()
  prev()
}

interface IListNavigable extends INavigable {
  first()
  last()
}

interface IActionable {
  OnAction()
}

interface ICancalable {
  OnEsc()
}

interface IMenuNvigable extends IListNavigable {}

interface IMenuItemNavigable extends IListNavigable, IActionable, ICancalable {}