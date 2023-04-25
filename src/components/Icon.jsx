import React from 'react'
import loadable from '@loadable/component'

export default function Icon({ iconName: name, iconProps: props }) {
  const folder = name.split(/(?=[A-Z])/)[0].toLowerCase()
  const Element = loadable(() =>
    import(`react-icons/${folder}/`).then((module) => {
      const icon = module[name]
      return icon
    })
  )
  return React.createElement(Element, props)
}
