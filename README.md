# Web Development Project: *Crypto Hustle*

Submitted by: **Kevin Tusiime**

This web app: **Crypto Hustle**

Time spent: **7** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **Clicking a button fetches data from a cryptocurrency API, displaying at least three attributes for a cryptocurrency (e.g., name, symbol, price).**
- [x] **Only one cryptocurrency's data is viewable at a time to ensure a focused user experience.**
- [x] **Cryptocurrency data displayed appears random to the user, introducing an element of surprise and discovery.**
- [x] **At least one image related to the cryptocurrency is displayed (e.g., a logo).**
- [x] **Clicking on a displayed attribute adds it to a ban list, preventing cryptocurrencies with that attribute from being displayed in the future.**
- [x] **Attributes in the ban list are used to filter out cryptocurrencies, ensuring users don't see content they're not interested in.**

The following **optional** enhancements have been added:

- [x] Multiple attribute types can be added to the ban list for more refined filtering.
- [x] Users can access a history of cryptocurrencies they've viewed during their session, enhancing engagement.

Additional features introduced:

* [x] Implemented conditional rendering for certain cryptocurrency attributes, ensuring a clean UI by displaying only relevant information.
* [x] Implemented logic to prevent duplication in the seen list (crypto favorites) and the ban list (excluded cryptos), maintaining list integrity and user clarity.
* [x] Adjusted cryptocurrency images to maintain their original aspect ratio, preserving the authenticity of visual representations.

## Video Walkthrough

Here's a walkthrough of implemented user stories:

![Video Walkthrough](veni-vici-walkthrough.gif)

<!-- Replace this with whatever GIF tool you used! -->
GIF created with [LiceCap](http://www.cockos.com/licecap/)

## Notes

Challenges faced:
- Initially, I encountered difficulties with managing state efficiently, especially when filtering out banned attributes from API responses. 
- I had to refine the logic for randomizing the display of cryptocurrencies while ensuring that the selection adheres to the user's ban list, providing both variety and personalization.

## License

```plaintext
Copyright [2024] [Kevin Tusiime]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

This revised README reflects the switch from a Dog Search App to a Crypto Hustle project, tailored to showcase your cryptocurrency web application. It encapsulates the essence of your project while maintaining the original structure and sections of the README for consistency.
