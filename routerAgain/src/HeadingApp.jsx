import React from "react";
import { Heading } from "./Heading";
import { Section } from "./Section";
export const HeadingApp = () => {
	return (
		<div>
			<Section>
				<Heading>Title</Heading>

				<Section>
					<Heading>Heading</Heading>
					<Heading>Heading </Heading>

					<Section>
						<Heading>Sub-heading</Heading>
						<Heading>Sub-heading</Heading>
						<Heading>Sub-heading</Heading>
						<Section>
							<Heading>Sub-Sub-heading</Heading>
							<Heading>Sub-Sub-heading</Heading>
							<Heading>Sub-Sub-heading</Heading>
						</Section>
					</Section>
				</Section>
			</Section>
		</div>
	);
};
