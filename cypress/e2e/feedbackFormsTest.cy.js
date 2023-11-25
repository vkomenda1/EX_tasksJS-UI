import feedbackForms from "../support/pages/FeedbackForms";
import { faker } from "@faker-js/faker"
import addressData from "..//fixtures/addressData.json"

addressData.feedbackForms.author = faker.person.fullName();
addressData.feedbackForms.comment = faker.lorem.words(5);


it("Feedback forms", () => {
    feedbackForms.visit();

    feedbackForms.getFirstBannerButton().click();
    feedbackForms.getSecondBannerButton().click();

    feedbackForms.getAuthorField().invoke('removeAttr', 'disabled').clear().type(addressData.feedbackForms.author);
    feedbackForms.getCommentField().type(addressData.feedbackForms.comment);
    feedbackForms.getRationField().click('bottomRight')

    feedbackForms.captchaValue()

    feedbackForms.getSubmitButton().click();

    feedbackForms.getMessageSuccessful().should("contain", 'Thank you so much for your amazing 5-star feedback!');
})