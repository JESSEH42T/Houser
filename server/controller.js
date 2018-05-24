module.exports = {
    getAll: ( req, res, next ) => {
        const db = req.app.get('db');
        db.get_all_houses()
          .then( houses => res.status(200).send( houses) )
          .catch( () => res.status(500).send() );
      },
    create: (req,res,next) => {
        const db = req.app.get('db');
        const {propertyName, address, city, formState, zipcode} = req.body;
        db.create_house([propertyName, address, city, formState, zipcode])
        .then( () => res.status(200).send('all good') )
        .catch( () => res.status(500).send() );
    },
    delete: ( req, res, next ) => {
        const db = req.app.get('db');
        const { params } = req;
    
        db.delete_house([ params.id ])
          .then( () => res.status(200).send() )
          .catch( () => res.status(500).send() );
      }
}