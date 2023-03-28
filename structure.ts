import {DefaultDocumentNodeResolver} from 'sanity/desk'
import Iframe from 'sanity-plugin-iframe-pane'
import {SanityDocument} from 'sanity'

export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
    // Only show preview pane on `movie` schema type documents
    switch (schemaType) {
      case `post`:
        return S.document().views([
          S.view.form(),
          S.view
            .component(Iframe)
            .options({
              url: `${process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"}`,
              defaultSize : `desktop`,
              reload : {
                button : true
              },
              attributes : {}
            })
            .title('Preview'),
        ])
      default:
        return S.document().views([S.view.form()])
    }
  }