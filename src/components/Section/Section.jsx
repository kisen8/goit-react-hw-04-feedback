import PropTypes from 'prop-types';
import { FeedbackSection, SectionTitle } from './SectionStyled';
export const Section = ({ title, children }) => {
  return (
    <FeedbackSection>
      <SectionTitle>{title}</SectionTitle>
      <div>{children}</div>
    </FeedbackSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
