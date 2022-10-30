exports.up = function(knex) {
  
    return knex.schema.createTable('users', table => {
      // Discord id of user
      table.bigint('discord_id').primary().notNullable();
      // Array of permissions
      table.specificType('permissions', 'text ARRAY').notNullable();
      // Acess and refresh token
      table.string('access_token');
      table.string('refresh_token');
      // Timestamps
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex) { 
      return knex.schema.dropTable('users');
  };
  