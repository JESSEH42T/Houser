    CREATE TABLE IF NOT EXISTS houses (
        id SERIAL PRIMARY KEY,
        name VARCHAR(30),
        address VARCHAR(100),
        city VARCHAR(100),
        state VARCHAR(2),
        zip INTEGER,
        img TEXT,
        mortgage DECIMAL,
        rent DECIMAL
    )

    INSERT INTO HOUSES (
        name,address,city,state,zip,img,mortgage,rent
    ) values (
        'Jesse','925 e 460 s', 'Provo', 'Ut', 84606, 'http://lorempixel.com/400/200', 2000, 2000
    )
     INSERT INTO HOUSES (
        name,address,city,state,zip,img,mortgage,rent
    ) values (
        'Sami','927 e 460 s', 'Provo', 'Ut', 90034, 'http://lorempixel.com/400/200', 2000, 2000
    )
    
    ALTER TABLE HOUSES 
    ADD img TEXT,
        mortgage DECIMAL,
        rent DECIMAL