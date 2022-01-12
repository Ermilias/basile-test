import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
	query countries {
		countries(filter: { currency: { eq: "EUR" } }) {
			name
			emoji
		}
	}
`;