import styled from "styled-components";
import { NEGATIVE_COLOR, POSITIVE_COLOR } from "../ui/colors";

const BadgeType = "positive" || "negative";

const getColorFromType = (BadgeType) => {
  switch (BadgeType) {
    case "negative":
      return NEGATIVE_COLOR;
    case "positive":
      return POSITIVE_COLOR;
  }
};

export const Badge = styled.span`
  /* Adapt the colors based on primary prop */
  background: ${({ type }) => getColorFromType(BadgeType)};
  color: black;
  font-size: 0.5em;
  line-height: 1em;
  margin: 1em;
  padding: 0.25em 0.5em;
  border-radius: 0.5rem;
`;
