# Builder.io Integration with Next.js Application

This project is a Next.js web application integrated with Builder.io, demonstrating structured data rendering and custom React component registration.

## Getting Started

To get the project up and running locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mehmetabakir/alipes-assessment.git
   cd alipes-assessment
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root of your project and add necessary environment variables. For Builder.io integration, you will be needing an API key.

   ```plaintext
   NEXT_PUBLIC_BUILDER_API_KEY=<your-builder-api-key>
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Builder.io Integration

### Steps Taken

1. **Builder.io Page Setup**:
   - Created a new page in Builder.io.
   - Added structured data (e.g., products) to a Builder.io models.
   - The products contains `imageUrl`, `name`, `price` and `description`

2. **Rendering in Next.js**:
   - Integrated Builder.io API to fetch and render the structured data in `products/page.tsx`.
   - Visit [http://localhost:3000/products](http://localhost:3000/products)

3. **Custom React Component**:
   - Registered `Product.tsx` for use within Builder.io pages.

## Automated Testing

### Jest and React Testing Library

- **Setup**: Configured Jest and React Testing Library for automated testing.
- **Tests**: Created tests in `__test__` to ensure:
  - Builder.io data is rendered correctly.
  - Custom React components function as expected.

To run tests:

```bash
npm test
```

## Suggestions for Improvement

- **Error Handling**: Implement robust error handling for API calls.
- **Performance**: Optimize data fetching and rendering processes.
- **Accessibility**: Ensure all components and interactions are accessible.
