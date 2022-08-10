import React, { useMemo } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import FormGroup from '../FormGroup/FormGroup';
import FormGroupList from '../FormGroup/FormGroupList';
import getInputs from '../FormGroup/helpers';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import CvPreview from '../CvPreview/CvPreview';

function FormContainer() {
  const personalInputs = useMemo(() => getInputs('personal'), []);
  const educationInputs = useMemo(() => getInputs('education'), []);
  const experienceInputs = useMemo(() => getInputs('experience'), []);
  const matchMediaQuery = useMediaQuery('(max-width: 720px)');
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  return (
    <>
      <form
        aria-label="Add information"
        className="text-neutral-200 flex flex-col gap-10 w-full align-center md:w-64 lg:w-80"
      >
        <FormGroup
          ariaLabel="Personal Information"
          title="Personal Information"
          inputs={personalInputs}
          modify="personal"
        />
        <FormGroupList inputs={educationInputs} type="education" />
        <FormGroupList inputs={experienceInputs} type="experience" />
        {matchMediaQuery && (
          <Button onClick={() => setIsModalOpen(!isModalOpen)}>
            Show Preview
          </Button>
        )}
      </form>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(!isModalOpen)}>
          <CvPreview forceShow />
        </Modal>
      )}
    </>
  );
}

export default FormContainer;
