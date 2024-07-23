import {Component} from 'react'

import {
  EditAppContainer,
  EditCardContainer,
  Heading,
  InputControlContainer,
  InputElement,
  Button,
  InputValue,
} from '../../styledComponents'

class EditableTextApp extends Component {
  state = {inputValue: '', textStatus: false}

  onChangeInputText = event => {
    this.setState({inputValue: event.target.value})
  }

  onClickSaveButton = () => {
    this.setState({textStatus: true})
  }

  onClickEditButton = () => {
    this.setState({textStatus: false})
  }

  renderSaveContainer = () => {
    const {inputValue} = this.state
    return (
      <InputControlContainer>
        <InputElement
          type="text"
          value={inputValue}
          onChange={this.onChangeInputText}
        />
        <Button type="button" onClick={this.onClickSaveButton}>
          Save
        </Button>
      </InputControlContainer>
    )
  }

  renderEditContainer = () => {
    const {inputValue} = this.state
    return (
      <InputControlContainer>
        <InputValue>{inputValue}</InputValue>
        <Button type="button" onClick={this.onClickEditButton}>
          Edit
        </Button>
      </InputControlContainer>
    )
  }

  render() {
    const {textStatus} = this.state
    return (
      <EditAppContainer>
        <EditCardContainer>
          <Heading>Editable Text Input</Heading>
          {textStatus ? this.renderEditContainer() : this.renderSaveContainer()}
        </EditCardContainer>
      </EditAppContainer>
    )
  }
}

export default EditableTextApp
