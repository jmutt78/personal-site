import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Button } from './styles'
import Modal from '../Modal'

const SimpleModal = ({ buttonLabel, children }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <Button type="button" onClick={() => setShowModal(true)}>
        {buttonLabel}
      </Button>

      {showModal && (
        <Modal onCloseRequest={() => setShowModal(false)}>{children}</Modal>
      )}
    </div>
  )
}

SimpleModal.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default SimpleModal
