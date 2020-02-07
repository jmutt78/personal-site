import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Button } from './styles'
import Modal from '../Modal'

const ContactModal = ({ buttonLabel, children }) => {
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

ContactModal.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default ContactModal
