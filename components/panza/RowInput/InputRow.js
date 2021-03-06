import React, {PropTypes} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions
} from 'react-native'
import InputRowCell from './InputRowCell'
import {
  PrimaryText,
  Base,
  SecondaryText,
  PrimaryTextInput
} from '../index'

/**
 * InputRow allows the user to input text. It will render an icon or
 * a label if either of the props are provided, and it always
 * renders a TextInput. If a label prop is provided, the TextInput
 * is aligned to the right of the row.
 *
 * InputRow composes InputRowCell, PrimaryText, and PrimaryTextInput. You can
 * use these components to create your own custom InputRow.
 *
 * To have provide borders, wrap this component (and any other rows) in an InputGroup.
 */

class InputRow extends React.Component {

  static displayName = 'InputRow'

  static propTypes = {
    onChangeText: PropTypes.func,
    customInput: PropTypes.node,
    value: PropTypes.string,
    icon: PropTypes.node,
    label: PropTypes.string,
    maxLength: PropTypes.number
  }

  static defaultProps = {
    editable: true
  }

  focus(){
    this.refs.input.focus()
  }

  blur() {
    this.refs.input.blur()
  }

  render () {
    const {
      style,
      label,
      value,
      icon,
      maxLength,
      textAlign,
      customInput,
      ...other
    } = this.props

    let alignText = textAlign || (label ? 'right': 'left')

    return (
      <InputRowCell>
        {icon && (
          <Base ml={2}>
            {icon}
          </Base>
        )}
        {label &&
          <Base pl={2}>
            <PrimaryText>{label}</PrimaryText>
          </Base>
        }
        {customInput ? customInput :
          <PrimaryTextInput
            value={value}
            maxLength={maxLength}
            style={[styles.input, style]}
            textAlign={alignText}
            {...other}
          />
         }
      </InputRowCell>
    )
  }
}

var styles = StyleSheet.create({
  input: {
    paddingLeft: 16, // this should be configurable
    paddingRight: 16,
    flex: 1,
  },
  labelText: {
  },

})

export default InputRow
