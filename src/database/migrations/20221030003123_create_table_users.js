exports.up = function(knex) {
  
  return knex.schema.createTable('users', table => {
    // Internal id
    table.increments('id').primary();
    // Discord id of user
    table.bigint('discord_id').notNullable();
    // Array of permissions
    table.specificType('permissions', 'text ARRAY').notNullable();
    // Timestamps
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) { 
    return knex.schema.dropTable('users');
};
