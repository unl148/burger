-- Insert a set of records.
INSERT INTO burgers('burger_name')
values
    ('Chicken');

INSERT INTO burgers('burger_name')
values
    ('Whopper');

INSERT INTO burgers('burger_name')
values
    ('Double Whopper');

INSERT INTO burgers('burger_name', 'devoured')
values
    ('Tripple Whopper', true);

INSERT INTO burgers('burger_name', 'devoured')
values
    ('Cheese', true);